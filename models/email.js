class Email {
  /**
   * Constructor for class Email.
   * @param  {number} id          Unique value identifies a unique message.
   * @param  {number} email       Identifies of send.
   * @return {Email}              New instance of a Email.
   */
  constructor(...args) {
    [
      this.id,
      this.mail,
    ] = args;
  }

  setId(value) {
    this.id = value;
  }

  setEmail(value) {
    this.email = value;
  }

  getId() {
    return this.email;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = Email;
