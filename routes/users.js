const router = require('express').Router();
const { usersController } = require('../controllers');

const emailsRoutes = require('./emails');

// INDEX User
router.get('/', usersController.getAll);

// NEW User
router.post('/', usersController.insert);

// SHOW User
router.get('/:userId', usersController.get);

// UPDATE User
router.put('/:userId', usersController.update);

// DESTROY User
router.delete('/:userId', usersController.delete);

// Email routes
router.use('/:userId/emails', emailsRoutes);

module.exports = router;
