const express = require('express');

const router = express.Router();

// INDEX attachments
router.get('/', (req, res) => {
	res.send('INDEX');
});

// NEW attachments
router.post('/', (req, res) => {
	res.send('NEW');
});

// SHOW attachments
router.get('/:attachmentsId', (req, res) => {
	res.send('SHOW');
});

// UPDATE Attachments
router.put('/:attachmentsId', (req, res) => {
	res.send('UPDATE');
});

// DESTROY Attachments
router.delete('/:attachmentsId', (req, res) => {
	res.send('DELETE');
});



module.exports = router;