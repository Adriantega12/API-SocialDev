const db = require('../db');

class Attachment {
  /**
   * Constructor for class Attachment.
   * @param  {number}     id     Identifier of attachment.
   * @param  {number}     postId Identifier of the post the attachment was posted to.
   * @param  {date}       data   File that the attachment uses.
   * @return {Attachment}        New instance of an Attachment.
   */
  constructor({
    id,
    postId,
    data,
  }) {
    this.id = id;
    this.postId = postId;
    this.data = data;
  }

  static async getAll() {
    const data = await db.getAll('attachments');
    const response = [];
    data.forEach((row) => {
      response.push(new Attachment(row));
    });
    return response;
  }

  static async get(attachmentId) {
    const data = await db.get('attachments', '*', attachmentId);
    return data.length !== 0 ? new Attachment(data[0]) : data;
  }

  static async insert(attachment) {
    let id;
    try {
      const response = await db.insert('attachments', attachment);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new Attachment({ id, ...attachment }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('attachments', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(attachmentId) {
    let deletedRows;
    try {
      const results = await db.delete('attachments', attachmentId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Attachment;
