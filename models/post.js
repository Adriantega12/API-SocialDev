const db = require('../db');
const { User } = require('../models');

// FIXME Todos los metodos deben estar documentados

class Post {
  /**
   * Constructor for class Post.
   * @param  {number} id     Unique value, identifies a unique post.
   * @param  {number} userId Identifier of the user that originally wrote the post.
   * @param  {string} title  Title of the post.
   * @param  {string} text   Body of the post.
   * @param  {Date}   date   Creation date.
   * @param  {number} score  Post score, average of all scores related to this post.
   * @return {Post}          New instance of a Post.
   */
  constructor({
    id,
    userId,
    title,
    text,
    date,
    score,
    attachments,
    comments,
    scores,
  }) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.text = text;
    this.date = date;
    this.score = score;
    this.attachments = attachments;
    this.comments = comments;
    this.scores = scores;
  }

  static async getAll() {
    let data;

    try {
      data = await db.getAll('posts');
    } catch (error) {
      throw error;
    }

    const responsePromise = await data.map(async (row) => {
      const post = new Post(row);
      post.author = await User.getUserFullName(row.userId);
      return post;
    });

    const response = await Promise.all(responsePromise);

    return response;
  }

  static async get(postId) {
    let data;
    let user;
    let attachments;
    let comments;
    let scores;
    let post;

    try {
      data = await db.get('posts', '*', postId);
      user = await db.get('users', ['firstName', 'lastName'], data[0].userId);
      attachments = await db.getObjectByForeignId('attachments', '*', 'postId', postId);
      comments = await db.getObjectByForeignId('comments', '*', 'postId', postId);
      scores = await db.getObjectByForeignId('scores', '*', 'postsId', postId);
    } catch (error) {
      throw error;
    }

    if (data.length !== 0) {
      // Creating user from model data
      post = new Post(data[0]);
      // Adding relevant data
      post.author = `${user[0].firstName} ${user[0].lastName}`;
      post.attachments = attachments.map(attachment => attachment.data);
      post.comments = await Promise.all(await comments.map(async (comment) => {
        const userComment = (await db.get('users', ['firstName', 'lastName', 'profilePic'], comment.userId))[0];
        const commentView = {
          commentId: comment.id,
          userId: comment.userId,
          ppPath: userComment.profilePic,
          author: `${userComment.firstName} ${userComment.lastName}`,
          content: comment.content,
        };
        return commentView;
      }));
      post.scores = scores.map(score => score.score);
    } else {
      // Data is empty, so will post.
      post = data;
    }

    return post;
  }

  static async insert(post) {
    let id;

    try {
      const response = await db.insert('posts', post);
      id = response.insertId;
    } catch (error) {
      throw error;
    }

    const attachments = [];
    const comments = [];
    const scores = [];

    return id > 0 ? new Post({
      id,
      ...post,
      attachments,
      comments,
      scores,
    }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('posts', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return updatedRows > 0;
  }

  static async delete(postId) {
    let deletedRows;
    try {
      const results = await db.delete('posts', postId);
      deletedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return deletedRows > 0;
  }

  static async getAttachments(postId) {
    let data;
    try {
      data = await db.getObjectByForeignId('attachments', '*', 'postId', postId);
    } catch (error) {
      throw error;
    }
    const response = [];

    data.forEach((row) => {
      response.push(row);
    });

    return response;
  }

  static async addAttachment(attachment) {
    let id;

    try {
      const response = await db.insert('attachments', attachment);
      id = response.insertId;
    } catch (error) {
      throw error;
    }
    return id > 0 ? { id, ...attachment } : [];
  }

  static async deleteAtachment(attachmentId) {
    let deletedRows;

    try {
      const results = await db.delete('attachments', attachmentId);
      deletedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return deletedRows > 0;
  }

  // Scores
  static async getScores(postId) {
    let data;
    try {
      data = await db.getObjectByForeignId('scores', '*', 'postsId', postId);
    } catch (error) {
      throw error;
    }
    const response = [];

    data.forEach((row) => {
      response.push(row);
    });

    return response;
  }

  static async addScore(score) {
    let id;

    try {
      const response = await db.insert('scores', score);
      id = response.insertId;
    } catch (error) {
      throw error;
    }
    return id > 0 ? { id, ...score } : [];
  }

  static async deleteScore(scoreId) {
    let deletedRows;

    try {
      const results = await db.delete('scores', scoreId);
      deletedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return deletedRows > 0;
  }
}

module.exports = Post;
