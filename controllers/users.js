const db = require('../db');

class UsersController {
  constructor() {
    this.data = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];

    // Function binding
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.processResult = this.processResult.bind(this);
  }

  getAll(req, res) {

  }

  get(req, res) {

  }

  insert(req, res) {

  }

  update(req, res) {

  }

  delete(req, res) {

  }

  processResult(result) {

  }
}

module.exports = new UsersController();
