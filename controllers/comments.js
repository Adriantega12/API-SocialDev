const { Comment } = require('../models');
// const { Datetime } = require('../middlewares'); // FIXME if is a static class, using PascalCase

// FIXME Todos los metodos deben estar documentados

class CommentsController {
  constructor() {
    // Function binding
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res, next) {
    let data;

    try {
      data = await Comment.getAll(req.params.postId);
    } catch (error) {
      next(error);
    }

    data.forEach((comment) => {
      const d = new Date(comment.date);
      comment.date = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    });

    // FIXME this is not real pagination because the db is not doing it
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
      data = await Comment.get(Number(req.params.commentId));
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(404); // Not Found
    } else {
      data.date = Datetime.toJSFromMySQL(data.date);
      res.status(200); // OK
    }

    res.send(data);
  }

  async insert(req, res, next) {
    let data;

    const comment = {
      userId: req.session.user.id,
      ...req.body, // FIXME Before sending all the req.body you want to remove any extra data is not required for the model
      // the clean up can be here or in the model.
      postId: req.params.postId,
      // date: Datetime.toMySQLFromJS(Date.now()),
      date: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
      isEdited: false,
    };

    try {
      data = await Comment.insert(comment);
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
      data = await Comment.get(Number(req.params.commentId));
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(404).send(data); // Not Found
    }

    const comment = {
      ...req.body,
      isEdited: true,
    };

    const updated = await data.update(comment);
    data = new Comment({ ...data, isEdited: true });

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
      deleted = await Comment.delete(Number(req.params.commentId));
    } catch (error) {
      next(error);
    }

    if (deleted) {
      res.status(204); // No content
    } else {
      res.status(404); // Not Found
    }

    res.send();
  }
}

module.exports = new CommentsController();
