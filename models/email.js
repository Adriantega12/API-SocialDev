class Email {
  /**
   * Constructor for class Message.
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

  set id(value) {
    this.id = value;
  }

  set email(value) {
    this.email = value;
  }

  get id(){
    return this.email;
  }

  get email(){
    return this.email;
  }
}

module.exports = Email;
