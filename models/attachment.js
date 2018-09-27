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

  set id(value) {
    this.id = value;
  }

  set postId(value) {
    this.postId = value;
  }

  set data(value) {
    this.data = value;
  }

  get id() {
    return this.id;
  }

  get postId() {
    return this.postId;
  }

  get data() {
    return this.data;
  }
}

module.exports = Attachment;
