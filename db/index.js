const mysql = require('mysql');

class DB {
  constructor() {
    this.con = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    this.con.connect();
    this.tupples = undefined;
  }

  /**
   * Database method to get all tupples from a tabler
   * @param  {string} table Name of table to get all tupples from.
   * @return {object}       Array of tupples as objects
   */
  async getAll(table) {
    const promise = new Promise((resolve, reject) => {
      this.con.query('SELECT * FROM ??', [table], (error, results) => {
        if (error) throw reject(error);
        this.tupples = results;
        resolve(this.tupples);
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
          throw reject(error);
        }
        this.tupples = results;
        resolve(this.tupples);
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
          throw reject(error);
        }
        resolve(results);
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
          throw reject(error);
        }
        resolve(results);
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
          throw reject(error);
        }
        resolve(results);
      });
    });
    return promise;
  }
}
module.exports = new DB();
