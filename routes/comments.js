const router = require('express').Router({ mergeParams: true });
const { commentsController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Comment
router.get('/', commentsController.getAll);

// NEW Comment
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      userId: 'required integer',
      content: 'required word',
    },
  });
}, commentsController.insert);

// SHOW Comment
router.get('/:commentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      commentId: 'integer',
    },
  });
}, commentsController.get);

// UPDATE Comment
router.put('/:commentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      commentId: 'integer',
    },
    body: {
      content: 'word',
    },
  });
}, commentsController.update);

// DESTROY Comment
router.delete('/:commentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      commentId: 'integer',
    },
  });
}, commentsController.delete);

module.exports = router;
