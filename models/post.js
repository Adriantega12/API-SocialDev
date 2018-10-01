const db = require('../db');

class Post {
  /**
   * Constructor for class Post.
   * @param  {number} id       Unique value, identifies a unique post.
   * @param  {number} authorId Identifier of the user that originally wrote the post.
   * @param  {string} title    Title of the post.
   * @param  {string} text     Body of the post.
   * @param  {Date} date       Creation date.
   * @param  {number} score    Post score, average of all scores related to this post.
   * @return {Post}            New instance of a Post.
   */
  constructor({
    id,
    authorId,
    title,
    text,
    date,
    score,
  }) {
    this.id = id;
    this.authorId = authorId;
    this.title = title;
    this.text = text;
    this.date = date;
    this.score = score;
  }

  static async getAll() {
    let data;

    try {
      data = await db.getAll('posts');
    } catch (error) {
      return error;
    }

    const response = [];

    data.forEach((row) => {
      response.push(new Post(row));
    });

    return response;
  }

  static async get(postId) {
    let data;

    try {
      data = await db.get('posts', '*', postId);
    } catch (error) {
      return error;
    }

    return data.length !== 0 ? new Post(data[0]) : data;
  }

  static async insert(post) {
    let id;
    try {
      const response = await db.insert('posts', post);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new Post({ id, ...post }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('posts', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(postId) {
    let deletedRows;
    try {
      const results = await db.delete('posts', postId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Post;
