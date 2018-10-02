const router = require('express').Router();
const { postsController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Post
router.get('/', postsController.getAll);

// NEW Post
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      authorId: 'required integer',
      title: 'required word',
      text: 'required word',
      date: 'required date',
      score: 'required integer',
    },
  });
}, postsController.insert);

// SHOW Post
router.get('/:postId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
    },
  });
}, postsController.get);

// UPDATE Post
router.put('/:postId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
    },
    body: {
      authorId: 'integer',
      title: 'word',
      text: 'word',
      date: 'date',
      score: 'integer',
    },
  });
}, postsController.update);

// DESTROY Post
router.delete('/:postId', (req, res, next) => {

}, postsController.delete);

module.exports = router;
