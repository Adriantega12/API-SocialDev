class Role {
  /**
   * Constructor for class Role.
   * @param  {number} id                      Identifies of Role.
   * @param  {string} name                    name of Role.
   * @param  {bool} canReadPosts              .
   * @param  {bool} canWritePosts             Permission
   * @param  {bool} canEditOwnPosts          Permission.
   * @param  {bool} canDeletePosts            Permission.
   * @param  {bool} canEditOthersPost        Permission.
   * @param  {bool} canDeleteOthersPost       Permission.
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
      this.canDeletePosts,
      this.canEditOthersPost,
      this.canDeleteOthersPost,
      this.canManageOtherUsersPost,
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

  setCanDeletePosts(value) {
    this.canDeletePosts = value;
  }

  setCanEditOthersPost(value) {
    this.canEditOthersPost = value;
  }

  setCanDeleteOthersPost(value) {
    this.canDeleteOthersPost = value;
  }

  setCanManageOtherUsersPost(value) {
    this.canManageOtherUsersPost = value;
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

  getCanDeletePosts() {
    return this.canDeletePosts;
  }

  getCanEditOthersPost() {
    return this.canEditOthersPost;
  }

  getCanDeleteOthersPost() {
    return this.canDeleteOthersPost;
  }
}

module.exports = Role;
