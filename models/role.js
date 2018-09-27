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
  constructor(...args) {
    [
      this.id,
      this.name,
      this.canReadPosts,
      this.canWritePosts,
      this.canEditOwnPosts,
      this.canDeleteOwnPosts,
      this.canEditOthersPosts,
      this.canDeleteOthersPosts,
      this.canManageOtherUsers,
    ] = args;
  }

  setId(value) {
    this.id = value;
  }

  setName(value) {
    this.name = value;
  }

  setCanReadPosts(value) {
    this.canReadPosts = value;
  }

  setCanWritePosts(value) {
    this.canWritePosts = value;
  }

  setCanEditOwnPosts(value) {
    this.canEditOwnPosts = value;
  }

  setcanDeleteOwnPosts(value) {
    this.canDeleteOwnPosts = value;
  }

  setcanEditOthersPosts(value) {
    this.canEditOthersPosts = value;
  }

  setcanDeleteOthersPosts(value) {
    this.canDeleteOthersPosts = value;
  }

  setCanManageOtherUsers(value) {
    this.canManageOtherUsers = value;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCanReadPosts() {
    return this.canReadPosts;
  }

  getCanWritePosts() {
    return this.canWritePosts;
  }

  getCanEditOwnPosts() {
    return this.canEditOwnPosts;
  }

  getcanDeleteOwnPosts() {
    return this.canDeleteOwnPosts;
  }

  getcanEditOthersPosts() {
    return this.canEditOthersPosts;
  }

  getcanDeleteOthersPosts() {
    return this.canDeleteOthersPosts;
  }

  getCanManageOtherUsers() {
    return this.canManageOtherUsers;
  }
}

module.exports = Role;
