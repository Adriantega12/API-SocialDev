const router = require('express').Router();
const { messagesController } = require('../controllers');
const { validator, auth, Authorizer } = require('../middlewares');


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
  auth.haveSession,
], messagesController.insert);

// SHOW Message
router.get('/:messageId', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        messageId: 'integer',
      },
    });
  },
  auth.haveSession,
], messagesController.get);

// UPDATE Message
router.put('/:messageId', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        messageId: 'integer',
      },
      body: {
        text: 'word',
      },
    });
  },
  auth.haveSession,
  (req, res, next) => {
    Authorizer.authorize(req, res, next, {
      user: 'owns',
    });
  },
], messagesController.update);

// DESTROY Message
router.delete('/:messageId', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        messageId: 'integer',
      },
    });
  },
  auth.haveSession,
  (req, res, next) => {
    Authorizer.authorize(req, res, next, {
      user: 'owns',
    });
  },
], messagesController.delete);

module.exports = router;
