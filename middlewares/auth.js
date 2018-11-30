const bcrypt = require('bcrypt');
const { User, Token } = require('../models');
const { datetime } = require('../middlewares');
const mailer = require('../mail');

class Auth {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.haveSession = this.haveSession.bind(this);
    this.generatePasswordHash = this.generatePasswordHash.bind(this);
  }

  /**
   * Requires token
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async register(req, res, next) {
    let user;
    let token;

    try {
      user = await User.insert({
        ...req.body,
        password: await this.generatePasswordHash(req.body.password),
        roleId: 3,
      });// Where roleId 3 is "Inactive"
      token = await Auth.generateToken(user, 'register');
      const response = await mailer.sendMail({
        to: req.body.email,
        subject: 'Welcome to SocialDev!',
        text: `Please confirm your email at ${process.env.HOST}/auth/register/${token.token}`,
      });
      console.log(response);
    } catch (error) {
      return next(error);
    }


    res.status(201).send({
      message: 'Succesfully registered.',
      data: {
        user,
        token,
      },
    });

    return next();
  }

  /**
   * [confirmUser description]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async confirmUser(req, res, next) {
    let token;
    let user;

    try {
      // Get all relevant data
      const registerToken = await Token.get(req.params.token);
      user = await User.get(registerToken.userId);

      if (user.length !== 0) {
        // Generate new session token
        token = await Auth.generateToken(user, 'session');
        await registerToken.deactivate();
        // Update user
        await user.update({ roleId: 2 }); // Where role 2 is "user"
        user.role = 'user';
      }
    } catch (error) {
      return next(error);
    }

    res.status(202).send({
      message: 'Confirmed user',
      data: {
        user,
        token,
      },
    });

    return next();
  }

  /**
   * Requires token
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async login(req, res, next) {
    let user;
    let token;
    let message;

    try {
      // Try first for session token
      token = await Token.get(req.headers.token);

      if (!(token.length === 0) && await token.isActive()) { // If token exists and token is active
        message = 'Already logged in';
        res.status(303); // Redirecting
      } else { // User wasn't logged in previously
        user = await User.getByEmail(req.body.email); // Get user
        if (user.length === 0) { // User doesn't exists
          message = 'Credentials are wrong.';
          res.status(400); // Bad Request
        } else { // User exists, verify password
          const correctPassword = await Auth.checkPassword(req.body.password, user.password);
          if (correctPassword) {
            token = await Auth.generateToken(user, 'session');
            message = 'Logging in.';
            res.status(303); // Redirecting
          } else {
            message = 'Credentials are wrong.';
            res.status(400); // Bad Request
          }
        }
      }
    } catch (error) {
      return next(error);
    }

    res.send({
      message,
      token,
    });

    return next();
  }

  async recoverPassword(req, res, next) {
    let message;

    try {
      const user = await User.getByEmail(req.body.email);
      if (user.length !== 0) {
        const token = await Auth.generateToken(user, 'passRecovery');
        const response = await mailer.sendMail({
          to: req.body.email,
          subject: 'Reset your password in SocialDev',
          text: `Please recover your password by clicking localhost:3000/auth/recover/${token.token}`,
        });
        console.log(response);
        res.status(202);
        message = 'Email to reset password sent.';
      } else {
        res.status(404);
        message = 'Email doesn\'t exists.';
      }
    } catch (error) {
      return next(error);
    }


    res.send({ message });

    return next();
  }

  async resetPassword(req, res, next) {
    let token;
    let user;

    try {
      // Get all relevant data
      const resetToken = await Token.get(req.params.token);
      await resetToken.deactivate();
      user = await User.get(resetToken.userId);

      if (user.length !== 0) {
        // Update user password
        await user.update({
          password: await Auth.generatePasswordHash(req.body.password),
        });
      }
    } catch (error) {
      return next(error);
    }

    res.status(202).send({
      message: 'Password changed',
      data: {
        user,
        token,
      },
    });

    return next();
  }

  /**
   * [logout description]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async logout(req, res, next) {
    let token;
    let deactivated;
    let message;

    try {
      token = await Token.get(req.headers.token);
      deactivated = token.deactivate();
    } catch (error) {
      return next(error);
    }

    if (deactivated) {
      message = 'Succesfully logged out.';
      res.status(200); // OK
    }

    res.send({
      message,
    });

    return next();
  }

  /**
   * [haveSession description]
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async haveSession(req, res, next) {
    const token = await Token.get(req.headers.token);
    if (!(token.length === 0) && await token.isActive()) {
      req.session = {
        token,
        user: await User.get(token.userId),
      };

      next();
    } else {
      next({
        status: 401, // Unauthenticated
        message: 'You need to be logged to perfom this action.',
      });
    }
  }

  /**
   * [generateToken description]
   * @param  {[type]} user [description]
   * @param  {[type]} type [description]
   * @return {[type]}      [description]
   */
  static async generateToken(user, type) {
    const ACTIVE = true;
    let token;

    const tokenPromise = new Promise((resolve, reject) => {
      bcrypt.hash(`${user.firstName}${Date.now()}`, Number(process.env.SALT_ROUNDS), async (error, hash) => {
        if (error) {
          return reject(error);
        }

        const now = new Date(Date.now());
        const expires = new Date(now);
        expires.setHours(expires.getHours() + Number(process.env.SESSION_LIVES));
        const hashString = hash.split('/').join('');

        token = await Token.insert(new Token({
          token: hashString,
          created: datetime.toMySQLFromJS(now),
          expires: datetime.toMySQLFromJS(expires),
          type,
          status: ACTIVE,
          userId: user.id,
        }));

        return resolve(token);
      });
    });

    return tokenPromise;
  }

  /**
   * [generatePasswordHash description]
   * @param  {[type]} password [description]
   * @return {[type]}          [description]
   */
  async generatePasswordHash(password) {
    return Auth.generatePasswordHash(password);
  }

  /**
   * [generatePasswordHash description]
   * @param  {[type]} password [description]
   * @return {[type]}          [description]
   */
  static async generatePasswordHash(password) {
    const passwordPromise = new Promise((resolve, reject) => {
      bcrypt.hash(`${password}`, Number(process.env.SALT_ROUNDS), async (error, hash) => {
        if (error) {
          return reject(error);
        }
        return resolve(hash);
      });
    });

    return passwordPromise;
  }

  /**
   * [checkPassword description]
   * @param  {[type]} plainText [description]
   * @param  {[type]} hash      [description]
   * @return {[type]}           [description]
   */
  static async checkPassword(plainText, hash) {
    const isPasswordPromise = new Promise((resolve, reject) => {
      bcrypt.compare(plainText, hash, async (error, res) => {
        if (error) {
          return reject(error);
        }

        return resolve(res);
      });
    });
    return isPasswordPromise;
  }
}

module.exports = new Auth();
