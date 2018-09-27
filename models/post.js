
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
  constructor(...args) {
    [
      this.id,
      this.authorId,
      this.title,
      this.text,
      this.date,
      this.score,
    ] = args;
  }

  setId(value) {
    this.id = value;
  }

  setAuthorId(value) {
    this.authorId = value;
  }

  setTitle(value) {
    this.title = value;
  }

  setText(value) {
    this.text = value;
  }

  setDate(value) {
    this.date = value;
  }

  setScore(value) {
    this.score = value;
  }

  getId() {
    return this.id;
  }

  getAuthorId() {
    return this.authorId;
  }

  getTitle() {
    return this.title;
  }

  getText() {
    return this.text;
  }

  getDate() {
    return this.date;
  }

  getScore() {
    return this.score;
  }
}

module.exports = Post;
