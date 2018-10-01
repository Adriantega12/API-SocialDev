const db = require('../db');

class Email {
  /**
   * Constructor for class Email.
   * @param  {number} id     Unique value, identifies a unique email.
   * @param  {number} userId Identifier of the owner of the email.
   * @param  {string} email  Email string that represents a real email.
   * @return {Email}         New instance of an Email.
   */
  constructor({
    id,
    userId,
    email,
  }) {
    this.id = id;
    this.userId = userId;
    this.email = email;
  }

  static async getAll() {
    let data;

    try {
      data = await db.getAll('emails');
    } catch (error) {
      return error;
    }

    const response = [];
    data.forEach((row) => {
      response.push(new Email(row));
    });
    return response;
  }

  static async get(emailId) {
    let data;

    try {
      data = await db.get('emails', '*', emailId);
    } catch (error) {
      return error;
    }

    return data.length !== 0 ? new Email(data[0]) : data;
  }

  static async insert(email) {
    let id;
    try {
      const response = await db.insert('emails', email);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new Email({ id, ...email }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('emails', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(emailId) {
    let deletedRows;
    try {
      const results = await db.delete('emails', emailId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Email;
