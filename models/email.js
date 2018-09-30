class Email {
  /**
   * Constructor for class Email.
   * @param  {number} id    Unique value, identifies a unique email.
   * @param  {string} email Email string that represents a real email.
   * @return {Email}        New instance of an Email.
   */
  constructor({
    id,
    email,
  }) {
    this.id = id;
    this.email = email;
  }
}

module.exports = Email;
