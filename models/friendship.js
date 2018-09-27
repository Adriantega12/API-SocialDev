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
  constructor({
    id,
    userOneId,
    userTwoId,
    lastActionId,
    date,
    status,
  }) {
    this.id = id;
    this.userOneId = userOneId;
    this.userTwoId = userTwoId;
    this.lastActionId = lastActionId;
    this.date = date;
    this.status = status;
  }
}

module.exports = Friendship;
