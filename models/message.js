const db = require('../db');

class Message {
  /**
   * Constructor for class Message.
   * @param  {number} id         Unique value, identifies a unique message.
   * @param  {number} senderId   Identifier of the user that sended the message.
   * @param  {number} receiverId Identifier of the user that received the message.
   * @param  {string} text       Content of the message in text format.
   * @param  {Date} date         Date when the message was sended.
   * @return {Message}           New instance of a Message.
   */
  constructor({
    id,
    senderId,
    receiverId,
    text,
    date,
  }) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.text = text;
    this.date = date;
  }

  static async getAll() {
    let data;

    try {
      data = await db.getAll('messages');
    } catch (error) {
      return error;
    }

    const response = [];

    data.forEach((row) => {
      response.push(new Message(row));
    });

    return response;
  }

  static async get(messageId) {
    let data;

    try {
      data = await db.get('messages', '*', messageId);
    } catch (error) {
      return error;
    }

    return data.length !== 0 ? new Message(data[0]) : data;
  }

  static async insert(message) {
    let id;
    try {
      const response = await db.insert('messages', message);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new Message({ id, ...message }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('messages', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(messageId) {
    let deletedRows;
    try {
      const results = await db.delete('messages', messageId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Message;
