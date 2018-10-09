const router = require('express').Router();
const commentsRoutes = require('./comments');
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
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
    },
  });
}, postsController.delete);

// INDEX Attachment
router.get('/:postId/attachments', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
    },
  });
}, postsController.getAttachments);

// NEW Attachment
router.post('/:postId/attachments', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
    },
  });
}, postsController.addAttachment);

// Delete Attachment
router.delete('/:postId/attachments/:attachmentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
      attachmentId: 'integer',
    },
  });
}, postsController.deleteAttachment);

// INDEX score
router.get('/:postId/scores', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
    },
  });
}, postsController.getScores);

// NEW score
router.post('/:postId/scores', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
    },
  });
}, postsController.addScore);

// DELETE score
router.delete('/:postId/scores/:scoreId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      postId: 'integer',
      scoreId: 'integer',
    },
  });
}, postsController.deleteScore);

router.use('/:postId/comments', commentsRoutes);

module.exports = router;
