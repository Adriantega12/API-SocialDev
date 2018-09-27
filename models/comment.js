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
  constructor({
    id,
    postId,
    authorId,
    date,
    content,
    isEdited,
  }) {
    this.id = id;
    this.postId = postId;
    this.authorId = authorId;
    this.date = date;
    this.content = content;
    this.isEdited = isEdited;
  }
}

module.exports = Comment;
