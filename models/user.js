const db = require('../db');

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
  constructor({
    id,
    roleId,
    email,
    password,
    passwordSalt,
    passwordHash,
    githubToken,
    firstName,
    lastName,
    age,
    level,
    profilePic,
  }) {
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

    /*
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    */
  }

  static async getAll() {

  }

  static async get(userId) {

  }

  static async insert({
    roleId,
    email,
    password,
    passwordSalt,
    passwordHash,
    githubToken,
    firstName,
    lastName,
    age,
    level,
    profilePic,
  }) {

  }

  async update() {

  }

  async delete() {

  }
}

module.exports = User;
