const mysql = require('mysql');

// FIXME Todos los metodos deben estar documentados

class DB {
  constructor() {
    const config = {
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      timezone: 'utc',
    };

    // Decide host
    if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
      config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
    } else {
      config.host = process.env.DB_HOST;
    }

    this.con = mysql.createConnection(config);
    this.con.connect((error) => {
      if (error) throw error;
    });
    this.tupples = [];
  }

  /**
   * FIXME Falta paginado y filtrado
   * Database method to get all tupples from a tabler
   * @param  {string} table Name of table to get all tupples from.
   * @return {object}       Array of tupples as objects
   */
  async getAll(table, page = 0, perPage = 10) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT * FROM ?? LIMIT ?, ?', [table, page, perPage], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        this.tupples = results;
        return resolve(this.tupples);
      });
    });
    return promise;
  }

  async getCount(table) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT COUNT(*) FROM ??', [table], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        this.tupples = results;
        return resolve(this.tupples);
      });
    });
    return promise;
  }

  /**
   * Database method to get a tupple (and some or all of it's attributes) identified by ID.
   * @param  {string}       table   Name of table to get tupples from.
   * @param  {string array} columns Name of attributes that will be obtained.
   * @param  {number}       id      Identifier number of tupple
   * @return {object}               Tupple with identifier "id".
   */
  async get(table, columns, id) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT ?? FROM ?? WHERE id = ?', [columns, table, id], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        this.tupples = results;
        return resolve(this.tupples);
      });
    });
    return promise;
  }

  async getObjectByForeignId(table, columns, idAttribName, id) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT ?? FROM ?? WHERE ?? = ?', [columns, table, idAttribName, id], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        this.tupples = results;
        return resolve(this.tupples);
      });
    });
    return promise;
  }

  /**
   * Query for getting just the top 5 posts
   * @return {[type]} [description]
   */
  async getTopPosts() {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT * FROM posts ORDER BY score DESC LIMIT 0, 5', (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }

        this.tupples = results;
        return resolve(this.tupples);
      });
    });
    return promise;
  }

  /**
   * Get relationship of a user with others given his ID
   * @param  {Number}    userId ID of user to look friendships for
   * @return {[Friends]} Array of Friends
   */
  async getFriends(userId) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT * FROM friendships WHERE userOneId = ? OR userTwoId = ?', [userId, userId],
        (error, results) => {
          if (error) {
            return reject(DB.processError(error));
          }
          this.tupples = results;
          return resolve(this.tupples);
        });
    });
    return promise;
  }

  /**
   * Get an existent friendship between two users
   * @param  {Number}     userOne User number one that belongs to the friendship
   * @param  {Number}     userTwo User number two that belongs to the friendship
   * @return {Friendship} Friendship
   */
  async getFriendship(userOne, userTwo) {
    const promise = new Promise((resolve, reject) => {
      const query = 'SELECT * FROM friendships WHERE (userOneId = ? AND userTwoId = ?) OR (userOneId = ? AND userTwoId = ?)';
      this.con.query(query, [userOne, userTwo, userTwo, userOne],
        (error, results) => {
          if (error) {
            return reject(DB.processError(error));
          }
          this.tupples = results;
          return resolve(this.tupples);
        });
    });
    return promise;
  }

  async getToken(token) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT * FROM tokens WHERE status = TRUE AND token = ?', [token], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        this.tupples = results;
        return resolve(this.tupples);
      });
    });
    return promise;
  }

  /**
   * Database method to insert or create a tupple from a model object.
   * @param  {string} table Name of the table to insert on.
   * @param  {object} obj   Model object that will be inserted.
   * @return {object}       Information about the insertion in an object.
   */
  async insert(table, obj) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('INSERT INTO ?? SET ?', [table, obj], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        return resolve(results);
      });
    });
    return promise;
  }

  /**
   * Method to update a tupple given an object previously constructed from the corresponding model.
   * @param  {string} table Name of the table of the tupple to be updated.
   * @param  {object} obj   Model object that will update the old tupple.
   * @return {object}       Information about the update of the object.
   */
  async update(table, obj, id) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('UPDATE ?? SET ? WHERE id = ?', [table, obj, id], (error, results) => {
        if (error) {
          throw reject(DB.processError(error));
        }
        return resolve(results);
      });
    });
    return promise;
  }

  /**
   * Database method to delete a tupple identified by ID.
   * @param  {string} table Name of the table to delete from.
   * @param  {number} id    Identifier of the tupple to delete.
   * @return {object}       Information about the operation
   */
  async delete(table, id) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('DELETE FROM ?? WHERE id = ?', [table, id], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        return resolve(results);
      });
    });
    return promise;
  }

  async deleteFromUser(table, userId) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('DELETE FROM ?? WHERE userId = ?', [table, userId], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        return resolve(results);
      });
    });
    return promise;
  }

  async deleteEmail(table, emailName) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('DELETE FROM ?? WHERE email = ?', [table, emailName], (error, results) => {
        if (error) {
          return reject(DB.processError(error));
        }
        return resolve(results);
      });
    });
    return promise;
  }

  static processError(err) {
    const error = {};
    let data;

    switch (err.code) {
      case 'ER_DUP_ENTRY':
        data = this.getDataFromErrorMsg(err.sqlMessage);
        error.duplicated = {
          message: `The ${data.field} ${data.data} already exists on the system`,
          field: data.field,
          sql: err.sql,
        };
        break;
      default:
    }

    return error;
  }

  static getDataFromErrorMsg(message) {
    const data = unescape(message).match(/'([^']+)'/g);
    return {
      field: data[1].slice(1, -1),
      data: data[0].slice(1, -1),
    };
  }
}
module.exports = new DB();
