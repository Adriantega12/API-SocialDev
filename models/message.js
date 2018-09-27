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

  setId(value) {
    this.id = value;
  }

  setSenderId(value) {
    this.senderId = value;
  }

  setReceiverId(value) {
    this.receiverId = value;
  }

  setText(value) {
    this.text = value;
  }

  setDate(value) {
    this.date = value;
  }

  getId() {
    return this.id;
  }

  getSenderId() {
    return this.senderId;
  }

  getReceiverId() {
    return this.receiverId;
  }

  getText() {
    return this.text;
  }

  getDate() {
    return this.date;
  }
}

module.exports = Message;
