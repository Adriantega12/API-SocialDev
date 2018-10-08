const { User } = require('../models');

class UsersController {
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
      data = await User.getAll();
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
      data = await User.get(req.params.userId);
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

    try {
      data = await User.insert(req.body);
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
      data = await User.get(req.params.userId);
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(404).send(data); // Not Found
    }

    const updated = await data.update(req.body);
    data = new User(req.body);

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
      deleted = await User.delete(req.params.userId);
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

module.exports = new UsersController();
