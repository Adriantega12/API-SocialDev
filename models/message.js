class Message {
  /**
   * Constructor for class Message.
   * @param  {number} id         Unique value, identifies a unique message.
   * @param  {number} senderId   Identifier of the user that sended the message.
   * @param  {number} receiverId Identifier of the user that received the message.
   * @param  {string} text       Content of the message in text format.
   * @param  {Date} date         Date when the message was sended.
   * @return {Message}           New instance of a Message.

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
