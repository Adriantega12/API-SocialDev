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

  set id(value) {
    this.id = value;
  }

  set postId(value) {
    this.postId = value;
  }

  set authorId(value) {
    this.authorId = value;
  }

  set date(value) {
    this.date = value;
  }

  set content(value) {
    this.content = value;
  }

  set isEdited(value) {
    this.isEdited = value;
  }

  get id() {
    return this.id;
  }

  get postId() {
    return this.postId;
  }

  get authorId() {
    return this.authorId;
  }

  get date() {
    return this.date;
  }

  get content() {
    return this.content;
  }

  get isEdited() {
    return this.isEdited;
  }
}

module.exports = Comment;
