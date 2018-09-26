// L I K E S 

const express = require('express');

const router = express.Router();

// INDEX Comment
router.get('/', (req, res) => {
	res.send('INDEX');
});

// SHOW reaction
router.get('/:reactionId', (req, res) => {
	res.send('SHOW');
});

// DELETE Post
router.delete('/:reactionId', (req, res) => {
	res.send('DELETE');
});

// UPDATE raking
router.put('/:rakingId', (req, res) => {
	res.send('UPDATE');
});

module.exports = router;