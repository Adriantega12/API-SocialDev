class Attachment {
  /**
   * Constructor for class Attachment.
   * @param  {number}     id     Identifier of attachment.
   * @param  {number}     postId Identifier of the post the attachment was posted to.
   * @param  {date}       data   File that the attachment uses.
   * @return {Attachment}        New instance of an Attachment.
   */
  constructor({
    id,
    postId,
    data,
  }) {
    this.id = id;
    this.postId = postId;
    this.data = data;
  }
}

module.exports = Attachment;
