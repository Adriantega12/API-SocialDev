const bcrypt = require('bcrypt');
const { User, Token } = require('../models');
const { datetime } = require('../middlewares');

class Auth {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.haveSession = this.haveSession.bind(this);
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
      user = await User.insert(req.body);
      token = await Auth.generateToken(user, 'session');
      console.log(token);
    } catch (error) {
      return next(error);
    }


    res.status(201).send({
      data: {
        user,
        token,
        message: 'Succesfully registered.',
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
          message = 'User doesn\'t exists';
          res.status(404); // Not Found, user doesn't exists.
        } else if (req.body.password === user.password) { // User exists, verify password
          message = 'Logging user';
          token = await Auth.generateToken(user, 'session');
          res.status(303); // Redirecting
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

  async haveSession(req, res, next) {
    const token = await Token.get(req.headers.token);
    if (!(token.length === 0) && await token.isActive()) {
      req.session = {
        token,
      };

      next();
    } else {
      next({
        status: 403,
        message: 'You need to be logged to perfom this action.',
      });
    }
  }

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

        token = await Token.insert(new Token({
          token: hash,
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
}

module.exports = new Auth();
