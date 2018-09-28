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
}

module.exports = Score;
