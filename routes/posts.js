const router = require('express').Route();

// INDEX Post
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW Post
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW Post
router.get('/:postId', (req, res) => {
  res.send('SHOW');
});

// UPDATE Post
router.put('/:postId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY Post
router.delete('/:postId', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
