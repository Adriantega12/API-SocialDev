const db = require('../db');

class Score {
  /**
   * Constructor for class Score.
   * @param  {number} id      Identifier of a score.
   * @param  {number} postsId Identifier of the post the score belongs to.
   * @param  {number} usersId Identifier of the user the score was created by.
   * @param  {number} score   Score number. (Between 0 and 10)
   * @param  {date} date      Date the score was created.
   * @return {Score}          New instance of Score.
   */
  constructor({
    id,
    postsId,
    userId,
    score,
    date,
  }) {
    this.id = id;
    this.postsId = postsId;
    this.userId = userId;
    this.score = score;
    this.date = date;
  }

  static async getAll() {
    const data = await db.getAll('scores');
    const response = [];
    data.forEach((row) => {
      response.push(new Score(row));
    });
    return response;
  }

  static async get(scoreId) {
    const data = await db.get('scores', '*', scoreId);
    return data.length !== 0 ? new Score(data[0]) : data;
  }

  static async insert(score) {
    let id;
    try {
      const response = await db.insert('scores', score);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new Score({ id, ...score }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('scores', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(scoreId) {
    let deletedRows;
    try {
      const results = await db.delete('scores', scoreId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Score;
