const db = require('../db');

class Token {
  /**
   * [constructor description]
   * @param  {[type]} options.id       [description]
   * @param  {[type]} options.token    [description]
   * @param  {[type]} options.created  [description]
   * @param  {[type]} options.duration [description]
   * @param  {[type]} options.type     [description]
   * @param  {[type]} options.status   [description]
   * @param  {[type]} options.userId   [description]
   * @return {[type]}                  [description]
   */
  constructor({
    id,
    token,
    created,
    expires,
    type,
    status,
    userId,
  }) {
    this.id = id;
    this.token = token;
    this.created = created;
    this.expires = expires;
    this.type = type;
    this.status = status;
    this.userId = userId;
  }

  /**
   * Method to know if the current token is still a valid one
   * @return {Boolean} [description]
   */
  isActive() {
    const now = new Date(Date.now());
    const expires = new Date(this.expires);
    const status = now < expires;

    if (!this.status) {
      db.update('tokens', {
        status: false,
      }, this.id);
    }

    return status;
  }

  /**
   * [get description]
   * @param  {[type]} token [description]
   * @return {[type]}       [description]
   */
  static async get(token) {
    let data;

    try {
      data = await db.getToken(token);
    } catch (error) {
      throw error;
    }

    return new Promise(resolve => resolve(data.length !== 0 ? new Token(data[0]) : data));
  }

  /**
   * [insert description]
   * @param  {[type]} token [description]
   * @return {[type]}       [description]
   */
  static async insert(token) {
    let id;

    try {
      const data = {
        ...token,
      };
      const response = await db.insert('tokens', data);
      id = response.insertId;
    } catch (error) {
      throw error;
    }

    return new Promise(resolve => resolve(id > 0 ? { id, ...token } : []));
  }
}

module.exports = Token;
