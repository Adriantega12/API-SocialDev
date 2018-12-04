const { Message } = require('../models');
const { Datetime } = require('../middlewares');

// FIXME Todos los metodos deben estar documentados

class MessagesController {
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
      data = await Message.getAll();
    } catch (error) {
      next(error);
    }

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
      data = await Message.get(Number(req.params.messageId));
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

    const message = {
      senderId: req.session.user.id,
      ...req.body, // FIXME Before sending all the req.body you want to remove any extra data is not required for the model
      // the clean up can be here or in the model.
      // date: Datetime.toMySQLFromJS(Date.now()),
      date: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
    };

    try {
      data = await Message.insert(message);
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
      data = await Message.get(Number(req.params.messageId));
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(404).send(data); // Not Found
    }

    const updated = await data.update(req.body);
    data = new Message(req.body);

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
      deleted = await Message.delete(Number(req.params.messageId));
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

module.exports = new MessagesController();
