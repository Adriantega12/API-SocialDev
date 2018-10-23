const bcrypt = require('bcrypt');
const { User, Token } = require('../models');
const { datetime } = require('../middlewares');

class Auth {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.session = this.session.bind(this);
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
      token = await Auth.generateToken(user);
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

    try {
      // Try first for session token
      token = await Token.get(req.headers.token);

      if (!(token.length === 0) && token.isActive()) { // If token exists and token is active
        res.status(303); // Redirecting
      } else { // User wasn't logged in previously
        user = await User.getByEmail(req.body.email); // Get user
        if (user.length === 0) { // User doesn't exists
          res.status(404); // Not Found, user doesn't exists.
        } else if (req.body.password === user.password) { // User exists, verify password
          token = await Auth.generateToken(user);
          res.status(303); // Redirecting
        }
      }
    } catch (error) {
      return next(error);
    }

    res.send({
      message: 'Succesfully authenticated.',
      token,
    });

    return next();
  }

  async logout(req, res, next) {

  }

  async session(req, res, next) {
    console.log(req.headers);
    res.status(500).send('Test');
  }

  static async generateToken(user) {
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
          type: 'session',
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
