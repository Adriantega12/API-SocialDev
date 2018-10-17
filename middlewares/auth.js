const bcrypt = require('bcrypt');
const { User, Token } = require('../models');

class Auth {
  /*
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }
  */

  /**
   * Requires token
   * @param  {[type]}   req  [description]
   * @param  {[type]}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  static async register(req, res, next) {
    const SALT_ROUNDS = 10;
    const DURATION_IN_HOURS = 12;
    const ACTIVE = true;

    let user;

    try {
      user = User.insert(req.body);
    } catch (error) {
      return next(error);
    }

    bcrypt.hash(`${req.body.firstName}${Date.now()}`, SALT_ROUNDS, async (error, hash) => {
      if (error) {
        return next(error);
      }

      return Token.insert({
        token: hash,
        created: new Date(Date.now()),
        duration: DURATION_IN_HOURS,
        type: 'temp',
        status: ACTIVE,
        userId: user.id,
      });
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
  static async login(req, res, next) {

  }
}

module.exports = Auth;
