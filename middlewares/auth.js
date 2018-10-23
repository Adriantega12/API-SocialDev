const bcrypt = require('bcrypt');
const { User, Token } = require('../models');
const { datetime } = require('../middlewares');

class Auth {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  /**
   * Requires token
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async register(req, res, next) {
    /*let user;
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
      },
    });

    return next();*/
  }

  /**
   * Requires token
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async login(req, res, next) {
    /*let user;
    let token;

    try {
      user = await User.get(req.body.userId);
      token = await Token.get(req.body.token);
    } catch (error) {
      return next(error);
    }

    if (token && !token.isActive()) {
      token = await Auth.generateToken(user);
    }

    req.session = {
      token,
      user,
    };

    console.log(req);

    res.status(303) // Redirecting: See other
      .send('Succesfully authenticated.');

    return next();*/

    let user;
    let token;

    try {
      // User wasn't logged in previously
      user = await User.getByEmail(req.body.email);
      if (user.length === 0) {
        res.status(404); // Not Found, user doesn't exists.
      } else if (req.body.password === user.password) {
        token = await Auth.generateToken(user);
        req.session = {
          token,
        };
        res.status(303); // Redirecting
      }
    } catch (error) {
      return next(error);
    }

    res.send('Succesfully authenticated.');

    return next();
  }

  async logout(req, res, next) {

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
        token = await Token.insert(new Token({
          token: hash,
          created: datetime.toMySQLFromJS(now),
          expires: datetime.toMySQLFromJS(now.setHours(now.getHours() + process.env.SESSION_LIVES)),
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
