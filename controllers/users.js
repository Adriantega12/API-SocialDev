const { User } = require('../models');
const { datetime, auth } = require('../middlewares');

// FIXME Todos los metodos deben estar documentados

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

  /**
   * Obtains all users registered into the database
   * @param  {object}   req  [description]
   * @param  {object}   res  [description]
   * @param  {Function} next [description]
   * @return {[type]}        [description]
   */
  async getAll(req, res, next) {
    let data;

    try {
      data = await User.getAll();
    } catch (error) {
      return next(error);
    }

    // FIXME this is not real pagination because the db is not doing it
    const json = {
      data,
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
      data = await User.get(Number(req.params.userId));
    } catch (error) {
      return next(error);
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
      // FIXME Before sending all the req.body you want to remove any extra data is not required for the model
      // the clean up can be here or in the model.
      req.body.password = await auth.generatePasswordHash(req.body.password);
      req.body.roleId = 3;
      req.body.level = 1;
      data = await User.insert(req.body);
    } catch (error) {
      return next(error);
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
      data = await User.get(Number(req.params.userId));
    } catch (error) {
      return next(error);
    }

    if (data.length === 0) {
      res.status(404).send(data); // Not Found
    }

    // FIXME Before sending all the req.body you want to remove any extra data is not required for the model
    // the clean up can be here or in the model.
    const updated = await data.update(req.body);
    data = new User(req.body);

    if (updated) {
      res.status(202); // Accepted
    } else {
      res.status(409); // Conflict
    }

    res.send(data);
  }

  async delete(req, res, next) {
    let deleted;

    try {
      deleted = await User.delete(Number(req.params.userId));
    } catch (error) {
      return next(error);
    }

    if (deleted) {
      res.status(204); // No content
    } else {
      res.status(404); // Not Found
    }

    res.send();
  }

  // Friendships
  async getFriends(req, res, next) {
    let data;

    try {
      data = await User.getFriends(Number(req.params.userId));
    } catch (error) {
      return next(error);
    }

    const json = {
      data,
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

    const friendship = {
      userOneId: req.params.userId,
      userTwoId: req.params.friendId,
      lastActionId: req.params.userId,
      date: datetime.toMySQLFromJS(Date.now()),
      status: 1,
    };

    try {
      data = await User.addFriend(friendship);
    } catch (error) {
      return next(error);
    }

    if (data.length === 0) {
      res.status(409); // Conflict
    } else {
      res.status(201); // Created
    }

    res.send(friendship);
  }

  async getFeed(req, res, next) {
    let data;

    try {
      data = await User.getFeed(Number(req.params.userId));
    } catch (error) {
      return next(error);
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

  // Email
  async getEmails(req, res, next) {
    let data;

    try {
      data = await User.getEmails(Number(req.params.userId));
    } catch (error) {
      return next(error);
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

    const email = {
      userId: req.params.userId,
      email: req.body.email,
    };

    try {
      data = await User.addEmail(email);
    } catch (error) {
      return next(error);
    }

    if (!data) {
      res.status(409); // Conflict
    } else {
      res.status(201); // Created
    }

    res.send(email);
  }

  async deleteEmail(req, res, next) {
    let deleted;

    try {
      deleted = await User.deleteEmail(req.body.email);
    } catch (error) {
      return next(error);
    }

    if (deleted) {
      res.status(204); // No content
    } else {
      res.status(404); // Not Found
    }

    res.send();
  }
}

module.exports = new UsersController();
