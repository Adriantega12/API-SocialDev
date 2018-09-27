class Email {
  /**
   * Constructor for class Email.
   * @param  {number} id          Unique value identifies a unique message.
   * @param  {number} email       Identifies of send.
   * @return {Email}              New instance of a Email.
   */
  constructor({
    id,
    mail,
  }) {
    this.id = id;
    this.mail = mail;
  }
}

module.exports = Email;
