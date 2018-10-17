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
   * @param  {[type]} options.         [description]
   * @return {[type]}                  [description]
   */
  constructor({
    id,
    token,
    created,
    duration,
    type,
    status,
    userId,
  }) {
    this.id = id;
    this.token = token;
    this.created = created;
    this.expires = created + duration;
    this.type = type;
    this.status = status;
    this.userId = userId;
  }

  /**
   * [get description]
   * @param  {[type]} token [description]
   * @return {[type]}       [description]
   */
  static async get(token) {
    let data;

    try {
      data = db.getToken(token);
    } catch (error) {
      throw error;
    }

    return new Promise(resolve => resolve(data.length !== 0 ? new Token(data) : data));
  }

  /**
   * [insert description]
   * @param  {[type]} token [description]
   * @return {[type]}       [description]
   */
  static async insert(token) {
    let id;

    try {
      const response = await db.insert('tokens', token);
      id = response.insertId;
    } catch (error) {
      throw error;
    }

    return new Promise(resolve => resolve(id > 0 ? { id, ...token } : []));
  }
}
