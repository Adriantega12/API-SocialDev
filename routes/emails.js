const router = require('express').Router();

// INDEX Emails
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW Email
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW Email
router.get('/:emailId', (req, res) => {
  res.send('SHOW');
});

// UPDATE Email
router.put('/:emailId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY Email
router.delete('/:emailId', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
