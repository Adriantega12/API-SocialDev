const router = require('express').Router();
const { commentsController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Comment
router.get('/', commentsController.getAll);

// NEW Comment
router.post('/', commentsController.insert);

// SHOW Comment
router.get('/:commentId', commentsController.get);

// UPDATE Comment
router.put('/:commentId', commentsController.update);

// DESTROY Comment
router.delete('/:commentId', commentsController.delete);

module.exports = router;
