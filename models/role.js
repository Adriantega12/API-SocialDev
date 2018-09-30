const db = require('../db');

class Role {
  /**
   * Constructor for class Role.
   * @param  {number}  id                      Unique value, identifies a unique role.
   * @param  {string}  name                    Name that identifies a role.
   * @param  {boolean} canReadPosts            User can read posts.
   * @param  {boolean} canWritePosts           User can write posts.
   * @param  {boolean} canEditOwnPosts         User can edit posts.
   * @param  {boolean} canDeleteOwnPosts       User can delete his own posts.
   * @param  {boolean} canEditOthersPosts      User can edit other users' posts.
   * @param  {boolean} canDeleteOthersPosts    User can delete other users' posts.
   * @param  {boolean} canManageOtherUsersPost User can manage other users.
   * @return {Role}                            New instance of a Role.
   */
  constructor({
    id,
    name,
    canReadPosts,
    canWritePosts,
    canEditOwnPosts,
    canDeleteOwnPosts,
    canEditOthersPosts,
    canDeleteOthersPosts,
    canManageOtherUsers,
  }) {
    this.id = id;
    this.name = name;
    this.canReadPosts = canReadPosts;
    this.canWritePosts = canWritePosts;
    this.canEditOwnPosts = canEditOwnPosts;
    this.canDeleteOwnPosts = canDeleteOwnPosts;
    this.canEditOthersPosts = canEditOthersPosts;
    this.canDeleteOthersPosts = canDeleteOthersPosts;
    this.canManageOtherUsers = canManageOtherUsers;
  }

  static async getAll() {
    const data = await db.getAll('roles');
    const response = [];
    data.forEach((row) => {
      response.push(new Role(row));
    });
    return response;
  }

  static async get(roleId) {
    const data = await db.get('roles', '*', roleId);
    return data.length !== 0 ? new Role(data[0]) : data;
  }

  static async insert(role) {
    let id;
    try {
      const response = await db.insert('roles', role);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new Role({ id, ...role }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('roles', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(roleId) {
    let deletedRows;
    try {
      const results = await db.delete('roles', roleId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = Role;
