const router = require('express').Router();

// INDEX Comment
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW Comment
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW Comment
router.get('/:commentId', (req, res) => {
  res.send('SHOW');
});

// UPDATE Comment
router.put('/:commentId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY Comment
router.delete('/:commentId', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
