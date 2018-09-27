class Score {
  /**
   * Constructor for class Score.
   * @param  {number} postsId          Identifies of posts.
   * @param  {number} usersId          Identifies of users.
   * @param  {number} score            Score
   * @param  {date} date               Date score.
   * @return {Score}                   New instance of a Score.
   */
  constructor(...args) {
    [
      this.postsId,
      this.usersId,
      this.score,
      this.date,
    ] = args;
  }

  set postsId(value) {
    this.postsId = value;
  }

  set usersId(value) {
    this.usersId = value;
  }

  set score(value) {
    this.score = value;
  }

  set date(value) {
    this.date = value;
  }

  get postsId() {
    return this.postsId;
  }

  get usersId() {
    return this.usersId;
  }

  get score() {
    return this.score;
  }

  get date() {
    return this.date;
  }
}

module.exports = Score;
