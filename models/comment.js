class Comment {
  /**
   * Constructor for class Comment.
   * @param  {number}  id        Unique value, identifies a unique comment.
   * @param  {number}  postId    Identifier of the post the comment was posted to.
   * @param  {number}  authorId  Identifier of the user that posted the comment.
   * @param  {Date}    date      Date the comment was created.
   * @param  {string}  content   Content of the comment.
   * @param  {boolean} isEdited  Indicates if the comment was edited before.
   * @return {Comment}           New instance of a Comment.
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
