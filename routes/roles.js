const router = require('express').Router();

// INDEX Roles
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW Role
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW Role
router.get('/:roleId', (req, res) => {
  res.send('SHOW');
});

// UPDATE Role
router.put('/:roleId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY Role
router.delete('/:roleId', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
