const router = require('express').Router();

// INDEX Attachments
router.get('/', (req, res) => {
  res.send('INDEX');
});

// NEW Attachment
router.post('/', (req, res) => {
  res.send('NEW');
});

// SHOW Attachment
router.get('/:attachmentId', (req, res) => {
  res.send('SHOW');
});

// UPDATE Attachment
router.put('/:attachmentId', (req, res) => {
  res.send('UPDATE');
});

// DESTROY Attachment
router.delete('/:attachmentId', (req, res) => {
  res.send('DELETE');
});

module.exports = router;
