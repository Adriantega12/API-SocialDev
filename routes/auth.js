const router = require('express').Router();
const { auth, Authorizer } = require('../middlewares');

// Register route
router.post('/register', auth.register);

// Confirm user route
router.patch('/register/:token', auth.confirmUser);

// Login route
router.post('/login', auth.login);

// Logout route
router.get('/logout', auth.logout);

module.exports = router;
