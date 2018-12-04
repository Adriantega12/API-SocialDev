const db = require('../db');

class Token {
  /**
   * [constructor description]
   * @param  {[type]} id       [description]
   * @param  {[type]} token    [description]
   * @param  {[type]} created  [description]
   * @param  {[type]} duration [description]
   * @param  {[type]} type     [description]
   * @param  {[type]} status   [description]
   * @param  {[type]} userId   [description]
   * @return {[type]}          [description]
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
  async isActive() {
    const now = new Date(Date.now());
    const expires = new Date(this.expires);
    const status = now < expires;

    if (!status) {
      try {
        await this.deactivate();
      } catch (error) {
        throw error;
      }
    }

    return status;
  }

  async deactivate() {
    const INNACTIVE = false;
    return this.update({ status: INNACTIVE });
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

  async update(keyVals) {
    let updatedRows;

    try {
      const results = await db.update('tokens', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return updatedRows > 0;
  }
}

module.exports = Token;
