const router = require('express').Router();
const { usersController } = require('../controllers');
const { validator } = require('../middleware');

const emailsRoutes = require('./emails');

// INDEX User
router.get('/', usersController.getAll);

// NEW User
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      id,
      roleId,
      email,
      password,
      passwordSalt,
      passwordHash,
      githubToken,
      firstName,
      lastName,
      age,
      level,
      profilePic,
    },
  });
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
