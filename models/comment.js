const db = require('../db');

class Comment {
  /**
   * Constructor for class Comment.
   * @param  {number}  id        Unique value, identifies a unique comment.
   * @param  {number}  postId    Identifier of the post the comment was posted to.
   * @param  {number}  authorId  Identifier of the user that posted the comment.
   * @param  {Date}    date      Date the comment was created.
   * @param  {string}  content   Content of the comment.
   * @param  {boolean} isEdited  Indicates if the comment was edited before.
   * @return {Comment}           New instance of a Comment.
   */
  constructor({
    id,
    postId,
    authorId,
    date,
    content,
    isEdited,
  }) {
    this.id = id;
    this.postId = postId;
    this.authorId = authorId;
    this.date = date;
    this.content = content;
    this.isEdited = isEdited;
  }

  static async getAll() {
    const data = await db.getAll('users');
    const response = [];
    data.forEach((row) => {
      response.push(new User(row));
    });
    return response;
  }

  static async get(userId) {
    const data = await db.get('users', '*', userId);
    return data.length !== 0 ? new User(data[0]) : data;
  }

  static async insert(user) {
    let id;
    try {
      const response = await db.insert('users', user);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new User({ id, ...user }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('users', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(userId) {
    let deletedRows;
    try {
      const results = await db.delete('users', userId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Comment;
