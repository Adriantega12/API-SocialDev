const router = require('express').Router();

const emailsRoutes = require('./emails');

// INDEX User
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW User
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW User
router.get('/:userId', (req, res) => {
  res.send('SHOW');
});

// UPDATE User
router.put('/:userId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY User
router.delete('/:userId', (req, res) => {
  res.send('DELETE');
});

// Email routes
router.use('/:userId/emails', emailsRoutes);

module.exports = router;
