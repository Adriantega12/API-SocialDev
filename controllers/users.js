const { User } = require('../models');

class UsersController {
  constructor() {
    // Function binding
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);

    this.getFriends = this.getFriends.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.getFeed = this.getFeed.bind(this);

    this.getEmails = this.getEmails.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.deleteEmail = this.deleteEmail.bind(this);
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
      console.log(data);
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

  // Friendships
  async getFriends(req, res, next) {
    let data;

    try {
      data = await User.getFriends(req.params.userId);
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

  async addFriend(req, res, next) {
    let data;

    const json = {
      userOneId: req.params.userId,
      userTwoId: req.params.friendId,
      lastActionId: req.params.userId,
      date: new Date(Date.now()).toJSON().slice(0, 19).replace('T', ' '),
      status: 1,
    };

    try {
      data = await User.addFriend(json);
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(204); // No content
    } else {
      res.status(200); // OK
    }

    res.send(json);
  }

  async getFeed(req, res, next) {
    let data;

    try {
      data = await User.getFeed(req.params.userId);
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

//EMAIL

  async getEmails(req, res, next) {
    let data;

    try {
      data = await User.getEmails(req.params.userId);
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

  async addEmail(req, res, next) {
    let data;

    const json = {
      userId: req.params.userId,

      email: req.body.email,
    };

    try {
      data = await User.addEmail(json);
    } catch (error) {
      next(error);
    }

    if (data.length === 0) {
      res.status(204); // No content
    } else {
      res.status(200); // OK
    }

    res.send(json);
  }

  async deleteEmail(req, res, next) {
    let deleted;

    try {
      deleted = await User.deleteEmail(req.body.email);
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
