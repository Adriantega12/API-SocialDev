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

  set id(value) {
    this.id = value;
  }

  set roleId(value) {
    this.roleId = value;
  }

  set email(value) {
    this.email = value;
  }

  set password(value) {
    this.password = value;
  }

  set passwordSalt(value) {
    this.passwordSalt = value;
  }

  set passwordHash(value) {
    this.passwordHash = value;
  }

  set githubToken(value) {
    this.githubToken = value;
  }

  set firstName(value) {
    this.firstName = value;
  }

  set lastName(value) {
    this.lastName = value;
  }

  set age(value) {
    this.age = value;
  }

  set level(value) {
    this.level = value;
  }

  set profilePic(value) {
    this.profilePic = value;
  }

  get id() {
    return this.id;
  }

  get roleId() {
    return this.roleId;
  }

  get email() {
    return this.email;
  }

  get password() {
    return this.password;
  }

  get passwordSalt() {
    return this.passwordSalt;
  }

  get passwordHash() {
    return this.passwordHash;
  }

  get githubToken() {
    return this.githubToken;
  }

  get firstName() {
    return this.firstName;
  }

  get lastName() {
    return this.lastName;
  }

  get age() {
    return this.age;
  }

  get level() {
    return this.level;
  }

  get profilePic() {
    return this.profilePic;
  }
}

module.exports = User;
