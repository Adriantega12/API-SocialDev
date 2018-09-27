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

  set userOneId(value) {
    this.userOneId = value;
  }

  set userTwoId(value) {
    this.userTwoId = value;
  }

  set lastActionId(value) {
    this.lastActionId = value;
  }

  set date(value) {
    this.date = value;
  }

  set status(value) {
    this.status = value;
  }

  get userOneId() {
    return this.userOneId;
  }

  get userTwoId() {
    return this.userTwoId;
  }

  get lastActionId() {
    return this.lastActionId;
  }

  get date() {
    return this.date;
  }

  get status() {
    return this.status;
  }
}

module.exports = Friendship;
