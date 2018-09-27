class Attachment {
  /**
   * Constructor for class Attachment.
   * @param  {number} id          Identifies of attachment.
   * @param  {number} postId      Identifies of post.
   * @param  {date} data          Thing.
   * @return {Attachment}         New instance of a Attachment.
   */
  constructor(...args) {
    [
      this.id,
      this.postId,
      this.data,
    ] = args;
  }

  setId(value) {
    this.id = value;
  }

  setPostId(value) {
    this.postId = value;
  }

  setData(value) {
    this.data = value;
  }

  getId() {
    return this.id;
  }

  getPostId() {
    return this.postId;
  }

  getData() {
    return this.data;
  }
}

module.exports = Attachment;
