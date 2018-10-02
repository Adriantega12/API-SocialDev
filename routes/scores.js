const router = require('express').Router();
const { scoresController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Scores
router.get('/', scoresController.getAll);

// NEW Score
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      postsId: 'required integer',
      userId: 'required integer',
      score: 'required integer',
      date: 'required date',
    },
  });
}, scoresController.insert);

// SHOW Score
router.get('/:scoreId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      scoreId: 'integer',
    },
  });
}, scoresController.get);

// UPDATE Score
router.put('/:scoreId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      scoreId: 'integer',
    },
    body: {
      postsId: 'integer',
      userId: 'integer',
      score: 'integer',
      date: 'date',
    },
  });
}, scoresController.update);

// DESTROY Score
router.delete('/:scoreId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      scoreId: 'integer',
    },
  });
}, scoresController.delete);

module.exports = router;
