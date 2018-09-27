class Comment {
  /**
   * Constructor for class Comment.
   * @param  {number} id              Unique value identifies a unique comment.
   * @param  {number} postId          Unique value identifies a unique post.
   * @param  {number} authorId        Unique value identifies a unique author.
   * @param  {date} date              Date creation.
   * @param  {string} content         Content comment.
   * @param  {bool} isEdited          Is true if the comment is edited.
   * @return {Comment}                New instance of a Comment.
   */
  constructor(...args) {
    [
      this.id,
      this.postId,
      this.authorId,
      this.date,
      this.content,
      this.isEdited,
    ] = args;
  }

  setId(value) {
    this.id = value;
  }

  setPostId(value) {
    this.postId = value;
  }

  setAuthorId(value) {
    this.authorId = value;
  }

  setDate(value) {
    this.date = value;
  }

  setContent(value) {
    this.content = value;
  }

  setIsEdited(value) {
    this.isEdited = value;
  }

  getId() {
    return this.id;
  }

  getPostId() {
    return this.postId;
  }

  getAuthorId() {
    return this.authorId;
  }

  getDate() {
    return this.date;
  }

  getContent() {
    return this.content;
  }

  getIsEdited() {
    return this.isEdited;
  }
}

module.exports = Comment;
