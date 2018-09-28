class Friendship {
  /**
   * Constructor for class Friendship.
   * @param  {number} id           Unique value, identifies a unique friendship.
   * @param  {number} userOneId    User ID of one of the involved parties.
   * @param  {number} userTwoId    User ID of one of the involved parties.
   * @param  {number} lastActionId Last user that made an action regarding the friendship.
   * @param  {date} date           Date the friendship was created.
   * @param  {number} status       Current status of the friendship. {Request, Friends, Blocked}
   * @return {Friendship}          New instance of a Friendship.
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
