const db = require('../db');

class User {
  /**
   * Constructor for class User.
   * @param  {number} id           Unique value, identifies a unique user.
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
  }

  static async getAll() {
    const data = await db.getAll('users');
    const response = [];
    data.forEach((row) => {
      response.push(new User(row));
    });
    return response;
  }

  static async get(userId) {
    const data = await db.get('users', '*', userId);
    return data.length !== 0 ? new User(data[0]) : data;
  }

  static async insert(user) {
    let id;
    try {
      const response = await db.insert('users', user);
      id = response.insertId;
    } catch (error) {
      return error;
    }

    return id > 0 ? new User({ id, ...user }) : [];
  }

  async update(keyVals) {
    let updatedRows;
    try {
      const results = await db.update('users', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return updatedRows > 0;
  }

  static async delete(userId) {
    let deletedRows;
    try {
      const results = await db.delete('users', userId);
      deletedRows = results.affectedRows;
    } catch (error) {
      return error;
    }

    return deletedRows > 0;
  }
}

module.exports = User;
