const express = require('express');

const router = express.Router();

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

// INDEX User's posts
router.get('/users/:userId/posts', (req, res) => {
	res.send('INDEX User\'s posts');
});

// INDEX User's comments
router.get('/users/:userId/comments', (req, res) => {
	res.send('INDEX User\'s comments');
});

module.exports = router;
