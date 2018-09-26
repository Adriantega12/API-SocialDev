
class Post {
  /**
   * Constructor for class Post.
   * @param  {number} id           Unique value identifies a unique post.
   * @param  {number} authorId     Unique value identifies a unique user.
   * @param  {string} title        Title of post.
   * @param  {string} text         Body of post.
   * @param  {date} date           Creation date.
   * @param  {number} score        Post score.
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

  set id(value) {
    this.id = value;
  }

  set authorId(value) {
    this.authorId = value;
  }

  set title(value) {
    this.title = value;
  }

  set text(value) {
    this.text = value;
  }

  set date(value) {
    this.date = value;
  }

  set score(value) {
    this.score = value;
  }

  get id() {
    return this.id;
  }

  get authorId() {
    return this.authorId;
  }

  get title() {
    return this.title;
  }

  get text() {
    return this.text;
  }

  get date() {
    return this.date;
  }

  get score() {
    return this.score
  }
}

module.exports = Post;
