class Attachment {
  /**
   * Constructor for class Attachment.
   * @param  {number} id          Identifies of attachment.
   * @param  {number} postId      Identifies of post.
   * @param  {date} data          Thing.
   * @return {Attachment}         New instance of a Attachment.
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
