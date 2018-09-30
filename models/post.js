
class Post {
  /**
   * Constructor for class Post.
   * @param  {number} id       Unique value, identifies a unique post.
   * @param  {number} authorId Identifier of the user that originally wrote the post.
   * @param  {string} title    Title of the post.
   * @param  {string} text     Body of the post.
   * @param  {Date} date       Creation date.
   * @param  {number} score    Post score, average of all scores related to this post.
   * @return {Post}            New instance of a Post.
   */
  constructor({
    id,
    authorId,
    title,
    text,
    date,
    score,
  }) {
    this.id = id;
    this.authorId = authorId;
    this.title = title;
    this.text = text;
    this.date = date;
    this.score = score;
  }
}

module.exports = Post;
