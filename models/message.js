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
  constructor({
    id,
    senderId,
    receiverId,
    text,
    date,
  }) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.text = text;
    this.date = date;
  }
}

module.exports = Message;
