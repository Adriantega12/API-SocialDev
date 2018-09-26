const express = require('express');

const router = express.Router();

// INDEX Roles
router.get('/', (req, res) => {
	res.send('INDEX');
});

// NEW Roles
router.post('/', (req, res) => {
	res.send('NEW');
});

// SHOW Roles
router.get('/:rolesId', (req, res) => {
	res.send('SHOW');
});

// UPDATE Roles
router.put('/:rolesId', (req, res) => {
	res.send('UPDATE');
});

// DESTROY Roles
router.delete('/:rolesId', (req, res) => {
	res.send('DELETE');
});

module.exports = router;