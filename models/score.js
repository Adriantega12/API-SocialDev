class Score {
  /**
   * Constructor for class Score.
   * @param  {number} postsId          Identifies of posts.
   * @param  {number} usersId          Identifies of users.
   * @param  {number} score            Score
   * @param  {date} date               Date score.
   * @return {Score}                   New instance of a Score.
   */
  constructor({
    postsId,
    usersId,
    score,
    date,
  }) {
    this.postsId = postsId;
    this.usersId = usersId;
    this.score = score;
    this.date = date;
  }
}

module.exports = Score;
