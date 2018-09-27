class Role {
  /**
   * Constructor for class Role.
   * @param  {number} id                      Identifies of Role.
   * @param  {string} name                    name of Role.
   * @param  {bool} canReadPosts              .
   * @param  {bool} canWritePosts             Permission
   * @param  {bool} canEdithOwnPosts          Permission.
   * @param  {bool} canDeletePosts            Permission.
   * @param  {bool} canEdithOthersPost        Permission.
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
      this.canEdithOwnPosts,
      this.canDeletePosts,
      this.canEdithOthersPost,
      this.canDeleteOthersPost,
      this.canManageOtherUsersPost,
    ] = args;
  }

  set id(value) {
    this.id = value;
  }

  set name(value) {
    this.name = value;
  }

  set canReadPosts(value) {
    this.canReadPosts = value;
  }

  set canWritePosts(value) {
    this.canWritePosts = value;
  }

  set canEdithOwnPosts(value) {
    this.canEdithOwnPosts = value;
  }

  set canDeletePosts(value) {
    this.canDeletePosts = value;
  }

  set canEdithOthersPost(value) {
    this.canEdithOthersPost = value;
  }

  set canDeleteOthersPost(value) {
    this.canDeleteOthersPost = value;
  }

  set canManageOtherUsersPost(value) {
    this.canManageOtherUsersPost = value;
  }

  get id() {
    return this.id;
  }

  get name() {
    return this.name;
  }

  get canReadPosts() {
    return this.canReadPosts;
  }

  get canWritePosts() {
    return this.canWritePosts;
  }

  get canEdithOwnPosts() {
    return this.canEdithOwnPosts;
  }

  get canDeletePosts() {
    return this.canDeletePosts;
  }

  get canEdithOthersPost() {
    return this.canEdithOthersPost;
  }

  get canDeleteOthersPost() {
    return this.canDeleteOthersPost;
  }

  get canDeleteOthersPost() {
    return this.canDeleteOthersPost;
  }
}

module.exports = Role;
