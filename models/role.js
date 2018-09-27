class Role {
  /**
   * Constructor for class Role.
   * @param  {number} id                      Identifies of Role.
   * @param  {string} name                    name of Role.
   * @param  {bool} canReadPosts              .
   * @param  {bool} canWritePosts             Permission
   * @param  {bool} canEditOwnPosts           Permission.
   * @param  {bool} canDeleteOwnPosts         Permission.
   * @param  {bool} canEditOthersPosts        Permission.
   * @param  {bool} canDeleteOthersPosts      Permission.
   * @param  {bool} canManageOtherUsersPost   Permission.
   * @return {Role}                           New instance of a Role.
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
