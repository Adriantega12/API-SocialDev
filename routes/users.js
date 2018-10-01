const router = require('express').Router();
const { usersController } = require('../controllers');

const emailsRoutes = require('./emails');

// INDEX User
router.get('/', usersController.getAll);

// NEW User
router.post('/', (req, res, next) => {

}, usersController.insert);

// SHOW User
router.get('/:userId', (req, res, next) => {

}, usersController.get);

// UPDATE User
router.put('/:userId', (req, res, next) => {

}, usersController.update);

// DESTROY User
router.delete('/:userId', (req, res, next) => {

}, usersController.delete);

// Email routes
router.use('/:userId/emails', emailsRoutes);

module.exports = router;
