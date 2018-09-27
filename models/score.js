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

  setPostsId(value) {
    this.postsId = value;
  }

  setUsersId(value) {
    this.usersId = value;
  }

  setScore(value) {
    this.score = value;
  }

  setDate(value) {
    this.date = value;
  }

  getPostsId() {
    return this.postsId;
  }

  getUsersId() {
    return this.usersId;
  }

  getScore() {
    return this.score;
  }

  getDate() {
    return this.date;
  }
}

module.exports = Score;
