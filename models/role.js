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
}

module.exports = Role;
