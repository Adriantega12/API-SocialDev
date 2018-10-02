const router = require('express').Router();
const { usersController } = require('../controllers');
const { validator } = require('../middlewares');

const emailsRoutes = require('./emails');

// INDEX User
router.get('/', usersController.getAll);

// NEW User
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      roleId: 'required integer',
      email: 'required email',
      password: 'required specialalphanum',
      passwordSalt: 'required specialalphanum',
      passwordHash: 'required specialalphanum',
      githubToken: 'specialalphanum',
      firstName: 'word',
      lastName: 'word',
      age: 'integer',
      level: 'integer',
      profilePic: 'blob',
    },
  });
}, usersController.insert);

// SHOW User
router.get('/:userId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.get);

// UPDATE User
router.put('/:userId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
    body: {
      roleId: 'integer',
      email: 'email',
      password: 'specialalphanum',
      passwordSalt: 'specialalphanum',
      passwordHash: 'specialalphanum',
      githubToken: 'specialalphanum',
      firstName: 'word',
      lastName: 'word',
      age: 'integer',
      level: 'integer',
      profilePic: 'blob',
    },
  });
}, usersController.update);

// DESTROY User
router.delete('/:userId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.delete);

// Email routes
router.use('/:userId/emails', emailsRoutes);

module.exports = router;
