const router = require('express').Router();

// INDEX Scores
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW Score
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW Score
router.get('/:scoreId', (req, res) => {
  res.send('SHOW');
});

// UPDATE Score
router.put('/:scoreId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY Score
router.delete('/:scoreId', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
