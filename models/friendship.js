const db = require('../db');

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

  static async getAll() {
    let data;

    try {
      data = await db.getAll('friendships');
    } catch (error) {
      return error;
    }

    const response = [];
    data.forEach((row) => {
      response.push(new Friendship(row));
    });
    return response;
  }

  static async get(friendshipId) {
    let data;

    try {
      data = await db.get('friendships', '*', friendshipId);
    } catch (error) {
      return error;
    }

    return data.length !== 0 ? new Friendship(data[0]) : data;
  }

  static async insert(friendship) {
    let id;
    try {
      const response = await db.insert('friendships', friendship);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new Friendship({ id, ...friendship }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('friendships', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(friendshipId) {
    let deletedRows;
    try {
      const results = await db.delete('friendships', friendshipId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Friendship;
