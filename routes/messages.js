const router = require('express').Router();
const { messagesController } = require('../controllers');
const { validator, Auth, Authorizer } = require('../middlewares');


// INDEX Message
router.get('/', messagesController.getAll);

// NEW Message
router.post('/', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      body: {
        receiverId: 'required integer',
        text: 'required word',
      },
    });
  },
  Auth.haveSession,
], messagesController.insert);

// SHOW Message
router.get('/:messageId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      messageId: 'integer',
    },
  });
}, messagesController.get);

// UPDATE Message
router.put('/:messageId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      messageId: 'integer',
    },
    body: {
      text: 'word',
    },
  });
}, messagesController.update);

// DESTROY Message
router.delete('/:messageId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      messageId: 'integer',
    },
  });
}, messagesController.delete);

module.exports = router;
