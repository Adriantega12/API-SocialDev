class User {
  /**
   * Constructor for class User.
   * @param  {number} id           [description]
   * @param  {number} roleId       [description]
   * @param  {string} email        [description]
   * @param  {string} password     [description]
   * @param  {string} passwordSalt [description]
   * @param  {string} passwordHash [description]
   * @param  {string} githubToken  [description]
   * @param  {string} firstName    [description]
   * @param  {string} lastName     [description]
   * @param  {number} age          [description]
   * @param  {number} level        [description]
   * @param  {blob} profilePic   [description]
   * @return {User}              [description]
   */
  constructor(...args) {
    this.id = id;
    this.roleId = roleId;
    this.email = email;
    this.password = password;
    this.passwordSalt = passwordSalt;
    this.passwordHash = passwordHash;
    this.githubToken = githubToken;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.level = level;
    this.profilePic = profilePic;
    console.log(args);
  }
}

module.exports = User();
