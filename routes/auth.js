const router = require('express').Router();
const { Auth } = require('../middlewares');

// Register route
router.post('/register', Auth.register);

// Confirm user route
router.get('/register/:token', Auth.confirmUser);

// Login route
router.post('/login', Auth.login);

// Recover password route
router.post('/recover', Auth.recoverPassword);

// Reset password route
router.patch('/recover/:token', Auth.resetPassword);

// Logout route
router.get('/logout', Auth.logout);

// Has session route
router.get('/session', Auth.session);

module.exports = router;
