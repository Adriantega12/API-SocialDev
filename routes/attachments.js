const router = require('express').Router();
const { attachmentsController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Attachments
router.get('/', attachmentsController.getAll);

// NEW Attachment
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      postId: 'required integer',
      data: 'required blob',
    },
  });
}, attachmentsController.insert);

// SHOW Attachment
router.get('/:attachmentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      attachmentId: 'integer',
    },
  });
}, attachmentsController.get);

// UPDATE Attachment
router.put('/:attachmentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      attachmentId: 'integer',
    },
    body: {
      postId: 'integer',
      data: 'blob',
    },
  });
}, attachmentsController.update);

// DELETE Attachment
router.delete('/:attachmentId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      attachmentId: 'integer',
    },
  });
}, attachmentsController.delete);

module.exports = router;
