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
    let user;
    let token;

    try {
      user = await User.insert(req.body);
      token = await Auth.generateToken(user);
      console.log(token);
    } catch (error) {
      return next(error);
    }


    res.send({
      data: {
        user,
        token,
      },
    }).status(201);

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

        const currentDate = new Date(Date.now());
        token = await Token.insert(new Token({
          token: hash,
          created: datetime.toMySQLFromJS(currentDate),
          expires: datetime.toMySQLFromJS(
            currentDate.setHours(currentDate.getHours() + process.env.SESSION_LIVES)
          ),
          type: 'temp',
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
