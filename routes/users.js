const router = require('express').Router();
const { usersController } = require('../controllers');
const { validator } = require('../middlewares');

// const emailsRoutes = require('./emails');

// INDEX User
router.get('/', usersController.getAll);

// NEW User
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      roleId: 'required integer',
      email: 'required email',
      password: 'required specialalphanum',
      githubToken: 'specialalphanum',
      firstName: 'word',
      lastName: 'word',
      age: 'integer',
      level: 'integer',
      profilePic: 'specialalphanum',
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
// router.use('/:userId/emails', emailsRoutes);

// Friendships
// INDEX Friendship
router.get('/:userId/friendships', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.getFriends);

// NEW Friendship
router.post('/:userId/friendships/:friendId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
      friendId: 'integer',
    },
  });
}, usersController.addFriend);

// User feed
router.get('/:userId/feed', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.getFeed);

// INDEX emails
router.get('/:userId/emails', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.getEmails);

// NEW email
router.post('/:userId/emails', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.addEmail);

// DELETE email
router.delete('/:userId/emails', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
    body: {
      email: 'email',
    },
  });
}, usersController.deleteEmail);

module.exports = router;
