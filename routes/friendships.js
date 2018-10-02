const router = require('express').Router();
const { friendshipsController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Friendships
router.get('/', friendshipsController.getAll);

// NEW Friendship
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      userOneId: 'required integer',
      userTwoId: 'required integer',
      lastActionId: 'required integer',
      date: 'required date',
      status: 'required integer',
    },
  });
}, friendshipsController.insert);

// SHOW Friendship
router.get('/:friendshipId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      friendshipId: 'integer',
    },
  });
}, friendshipsController.get);

// UPDATE Friendship
router.put('/:friendshipId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      friendshipId: 'integer',
    },
    body: {
      userOneId: 'required integer',
      userTwoId: 'required integer',
      lastActionId: 'required integer',
      date: 'required date',
      status: 'required integer',
    },
  });
}, friendshipsController.update);

// DESTROY Friendship
router.delete('/:friendshipId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      friendshipId: 'integer',
    },
  });
}, friendshipsController.delete);

module.exports = router;
