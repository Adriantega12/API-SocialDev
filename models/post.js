
class Post {
  /**
   * Constructor for class Post.
   * @param  {number} id           Unique value identifies a unique post.
   * @param  {number} authorId     Unique value identifies a unique user.
   * @param  {string} title        Title of post.
   * @param  {string} text         Body of post.
   * @param  {date} date           Creation date.
   * @param  {number} score        Post score.
   * @return {Post}              New instance of a Post.
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
