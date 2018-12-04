const router = require('express').Router({ mergeParams: true });
const { commentsController } = require('../controllers');
const { validator, Auth, Authorizer } = require('../middlewares');

// INDEX Comment
router.get('/', commentsController.getAll);

// NEW Comment
router.post('/', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      body: {
        content: 'required word',
      },
    });
  },
  Auth.haveSession,
], commentsController.insert);

// SHOW Comment
router.get('/:commentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      commentId: 'integer',
    },
  });
}, commentsController.get);

// UPDATE Comment
router.put('/:commentId', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        commentId: 'integer',
      },
      body: {
        content: 'word',
      },
    });
  },
  Auth.haveSession,
  (req, res, next) => {
    Authorizer.authorize(req, res, next, {
      user: 'owns',
    });
  },
], commentsController.update);

// DESTROY Comment
router.delete('/:commentId', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        commentId: 'integer',
      },
    });
  },
  Auth.haveSession,
  (req, res, next) => {
    Authorizer.authorize(req, res, next, {
      user: 'owns',
    });
  },
], commentsController.delete);

module.exports = router;
