const express = require('express');

const router = express.Router();

// INDEX Message
router.get('/', (req, res) => {
	res.send('INDEX');
});

// NEW Message
router.post('/', (req, res) => {
	res.send('NEW');
});

// SHOW Message
router.get('/:messageId', (req, res) => {
	res.send('SHOW');
});

// UPDATE Message
router.put('/:messageId', (req, res) => {
	res.send('UPDATE');
});

// DESTROY Message
router.delete('/:messageId', (req, res) => {
	res.send('DELETE');
});

module.exports = router;