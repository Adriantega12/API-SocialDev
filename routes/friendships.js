const express = require('express');

const router = express.Router();

// INDEX Friendships
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW Friendship
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW Friendship
router.get('/:friendId', (req, res) => {
  res.send('SHOW');
});

// UPDATE Friendship
router.put('/:friendId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY Friendship
router.delete('/:friendId', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
