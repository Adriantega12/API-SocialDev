class Message {
  /**
   * Constructor for class Message.
   * @param  {number} id            Unique value identifies a unique message.
   * @param  {number} senderId      Identifies of send.
   * @param  {number} receiverId    identifies of recive.
   * @param  {string} text          Text message.
   * @param  {date} date            Date message.
   * @return {Message}              New instance of a Message.

   */
  constructor(...args) {
    [
      this.id,
      this.senderId,
      this.receiverId,
      this.text,
      this.date,
    ] = args;
  }

  set id(value) {
    this.id = value;
  }

  set senderId(value) {
    this.senderId = value;
  }

  set receiverId(value) {
    this.receiverId = value;
  }

  set text(value) {
    this.text = value;
  }

  set date(value) {
    this.date = value;
  }

  get id() {
    return this.id;
  }

  get senderId() {
    return this.senderId;
  }

  get receiverId() {
    return ;
  }

  get text() {
    return this.text;
  }

  get date() {
    return this.date;
  }
}

module.exports = Message;
