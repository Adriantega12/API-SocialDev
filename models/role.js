class Role {
  /**
   * Constructor for class Role.
   * @param  {number} id                      Identifies of Role.
   * @param  {string} name                    name of Role.
   * @param  {bool} canReadPosts              .
   * @param  {bool} canWritePosts             Permission
<<<<<<< HEAD
   * @param  {bool} canEditOwnPosts           Permission.
   * @param  {bool} canDeleteOwnPosts         Permission.
   * @param  {bool} canEditOthersPosts        Permission.
   * @param  {bool} canDeleteOthersPosts      Permission.
=======
   * @param  {bool} canEdithOwnPosts          Permission.
   * @param  {bool} canDeletePosts            Permission.
   * @param  {bool} canEdithOthersPost        Permission.
   * @param  {bool} canDeleteOthersPost       Permission.
>>>>>>> parent of 7255320... Setter/Getter hotfix
   * @param  {bool} canManageOtherUsersPost   Permission.
   * @return {Role}                           New instance of a Role.
   */
  constructor(...args) {
    [
      this.id,
      this.name,
      this.canReadPosts,
      this.canWritePosts,
<<<<<<< HEAD
      this.canEditOwnPosts,
      this.canDeleteOwnPosts,
      this.canEditOthersPosts,
      this.canDeleteOthersPosts,
      this.canManageOtherUsers,
=======
      this.canEdithOwnPosts,
      this.canDeletePosts,
      this.canEdithOthersPost,
      this.canDeleteOthersPost,
      this.canManageOtherUsersPost,
>>>>>>> parent of 7255320... Setter/Getter hotfix
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

<<<<<<< HEAD
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
=======
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
>>>>>>> parent of 7255320... Setter/Getter hotfix
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

<<<<<<< HEAD
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
=======
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
>>>>>>> parent of 7255320... Setter/Getter hotfix
  }
}

module.exports = Role;
