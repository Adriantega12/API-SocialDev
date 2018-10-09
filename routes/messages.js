const router = require('express').Router();
const { messagesController } = require('../controllers');
const { validator } = require('../middlewares');


// INDEX Message
router.get('/', messagesController.getAll);

// NEW Message
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      senderId: 'required integer',
      receiverId: 'required integer',
      text: 'required word',
      date: 'required date',
    },
  });
}, messagesController.insert);

// SHOW Message
router.get('users/:userId/messages/messageId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      messageId: 'integer',
    },
  });
}, messagesController.get);

// UPDATE Message
router.put('users/:userId/messages/messageId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      messageId: 'integer',
    },
    body: {
      senderId: 'integer',
      receiverId: 'integer',
      text: 'word',
      date: 'date'
    },
  });
}, messagesController.update);

// DESTROY Message
router.delete('users/:userId/messages/messageId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      messageId: 'integer',
    },
  });
}, messagesController.delete);

module.exports = router;
