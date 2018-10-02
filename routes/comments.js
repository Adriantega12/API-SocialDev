const router = require('express').Router();
const { commentsController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Comment
router.get('/', commentsController.getAll);

// NEW Comment
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      postId: 'required integer',
      authorId: 'required integer',
      date: 'required date',
      content: 'required word',
      isEdited: 'boolean',
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
      postId: 'integer',
      authorId: 'integer',
      date: 'date',
      content: 'word',
      isEdited: 'boolean',
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
