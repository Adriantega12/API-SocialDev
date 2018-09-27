// const db = require('./db');

class User {
  /**
   * Constructor for class User.
   * @param  {number} id           Unique value identifies a unique user.
   * @param  {number} roleId       Indicates the permissions the user has.
   * @param  {string} email        Main email of the user.
   * @param  {string} password     Hashed password of the user.
   * @param  {string} passwordSalt Salt added to the original password to make the hash.
   * @param  {string} passwordHash Hash used to create the user password.
   * @param  {string} githubToken  Token to login with Github.
   * @param  {string} firstName    User's first name.
   * @param  {string} lastName     User's last name.
   * @param  {number} age          User's age.
   * @param  {number} level        User's level for the gamefication of SocialDev.
   * @param  {blob} profilePic     User's file profile picture.
   * @return {User}                New instance of a User.
   */
  constructor(...args) {
    [
      this.id,
      this.roleId,
      this.email,
      this.password,
      this.passwordSalt,
      this.passwordHash,
      this.githubToken,
      this.firstName,
      this.lastName,
      this.age,
      this.level,
      this.profilePic,
    ] = args;
  }

  /*
  save() {
    db.create(this);
  }
  */

  setId(value) {
    this.id = value;
  }

  setRoleId(value) {
    this.roleId = value;
  }

  setEmail(value) {
    this.email = value;
  }

  setPassword(value) {
    this.password = value;
  }

  setPasswordSalt(value) {
    this.passwordSalt = value;
  }

  setPasswordHash(value) {
    this.passwordHash = value;
  }

  setGithubToken(value) {
    this.githubToken = value;
  }

  setFirstName(value) {
    this.firstName = value;
  }

  setLastName(value) {
    this.lastName = value;
  }

  setAge(value) {
    this.age = value;
  }

  setLevel(value) {
    this.level = value;
  }

  setProfilePic(value) {
    this.profilePic = value;
  }

  getId() {
    return this.id;
  }

  getRoleId() {
    return this.roleId;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getPasswordSalt() {
    return this.passwordSalt;
  }

  getPasswordHash() {
    return this.passwordHash;
  }

  getGithubToken() {
    return this.githubToken;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getAge() {
    return this.age;
  }

  getLevel() {
    return this.level;
  }

  getProfilePic() {
    return this.profilePic;
  }
}

module.exports = User;
