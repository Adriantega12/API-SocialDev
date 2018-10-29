const { Post } = require('../models');
const { datetime } = require('../middlewares');

class PostsController {
  constructor() {
    // Function binding
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);

    this.getAttachments = this.getAttachments.bind(this);
    this.addAttachment = this.addAttachment.bind(this);
    this.deleteAttachment = this.deleteAttachment.bind(this);

    this.getScores = this.getScores.bind(this);
    this.addScore = this.addScore.bind(this);
    this.deleteScore = this.deleteScore.bind(this);
  }

  async getAll(req, res, next) {
    let data;

    try {
      data = await Post.getAll();
    } catch (error) {
      next(error);
    }

    const json = {
      data: data,
      total_count: data.length,
      per_page: req.params.per_page,
      page: req.params.page,
    };

    if (data.length === 0) {
      res.status(204); // No content
    } else {
      res.status(200); // OK
    }

    res.send(json);
  }

  async get(req, res, next) {
    let data;

    try {
      data = await Post.get(Number(req.params.postId));
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(404); // Not Found
    } else {
      res.status(200); // OK
    }

    res.send(data);
  }

  async insert(req, res, next) {
    let data;

    const post = {
      userId: req.session.user.id,
      ...req.body,
      date: datetime.toMySQLFromJS(Date.now()),
    };

    try {
      data = await Post.insert(post);
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(409); // Conflict
    } else {
      res.status(201); // Created
    }

    res.send(data);
  }

  async update(req, res, next) {
    let data;

    try {
      data = await Post.get(Number(req.params.postId));
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(404).send(data); // Not Found
    }

    const updated = await data.update(req.body);
    data = new Post(req.body);

    if (updated) {
      res.status(200); // OK
    } else {
      res.status(409); // Conflict
    }

    res.send(data);
  }

  async delete(req, res, next) {
    let deleted;

    try {
      deleted = await Post.delete(Number(req.params.postId));
    } catch (error) {
      next(error);
    }

    if (deleted) {
      res.status(200); // OK
    } else {
      res.status(404); // Not Found
    }

    res.send();
  }

  // Attachments
  async getAttachments(req, res, next) {
    let data;

    try {
      data = await Post.getAttachments(Number(req.params.postId));
    } catch (error) {
      next(error);
    }

    const json = {
      data: data,
      total_count: data.length,
      per_page: req.params.per_page,
      page: req.params.page,
    };

    if (data.length === 0) {
      res.status(204); // No content
    } else {
      res.status(200); // OK
    }

    res.send(json);
  }

  async addAttachment(req, res, next) {
    let data;

    const attachment = {
      postId: req.params.postId,
      ...req.body,
    };

    try {
      data = await Post.addAttachment(attachment);
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(204); // No content
    } else {
      res.status(200); // OK
    }

    res.send(data);
  }

  async deleteAttachment(req, res, next) {
    let deleted;

    try {
      deleted = await Post.deleteAtachment(Number(req.params.attachmentId));
    } catch (error) {
      next(error);
    }

    if (deleted) {
      res.status(200); // OK
    } else {
      res.status(404); // Not Found
    }

    res.send();
  }

  // Scores
  async getScores(req, res, next) {
    let data;

    try {
      data = await Post.getScores(Number(req.params.postId));
    } catch (error) {
      next(error);
    }

    const json = {
      data: data,
      total_count: data.length,
      per_page: req.params.per_page,
      page: req.params.page,
    };

    if (data.length === 0) {
      res.status(204); // No content
    } else {
      res.status(200); // OK
    }

    res.send(json);
  }

  async addScore(req, res, next) {
    let data;

    const score = {
      postsId: Number(req.params.postId),
      userId: req.body.userId,
      score: req.body.score,
      date: datetime.toMySQLFromJS(Date.now()),
    };

    try {
      data = await Post.addScore(score);
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(204); // No content
    } else {
      res.status(200); // OK
    }

    res.send(data);
  }

  async deleteScore(req, res, next) {
    let deleted;

    try {
      deleted = await Post.deleteScore(Number(req.params.scoreId));
    } catch (error) {
      next(error);
    }

    if (deleted) {
      res.status(200); // OK
    } else {
      res.status(404); // Not Found
    }

    res.send();
  }
}

module.exports = new PostsController();
