class Friendship {
  /**
   * Constructor for class Friendship.
   * @param  {number} userOneId          Friendship one.
   * @param  {number} userTwoId          Friendship two.
   * @param  {number} lastActionId       Last action.
   * @param  {date} date                 Date friendship.
   * @param  {number} status             status friendship.
   * @return {Friendship}                New instance of a Friendship.
   */
  constructor(...args) {
    [
      this.userOneId,
      this.userTwoId,
      this.lastActionId,
      this.date,
      this.status,
    ] = args;
  }

  setUserOneId(value) {
    this.userOneId = value;
  }

  setUserTwoId(value) {
    this.userTwoId = value;
  }

  setLastActionId(value) {
    this.lastActionId = value;
  }

  setDate(value) {
    this.date = value;
  }

  setStatus(value) {
    this.status = value;
  }

  getUserOneId() {
    return this.userOneId;
  }

  getUserTwoId() {
    return this.userTwoId;
  }

  getLastActionId() {
    return this.lastActionId;
  }

  getDate() {
    return this.date;
  }

  getStatus() {
    return this.status;
  }
}

module.exports = Friendship;
