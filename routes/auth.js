const router = require('express').Router();
const { auth } = require('../middlewares');

// Register route
router.post('/register', auth.register);

// Confirm user route
router.get('/register/:token', auth.confirmUser);

// Login route
router.post('/login', auth.login);

// Recover password route
router.post('/recover', auth.recoverPassword);

// Reset password route
router.patch('/recover/:token', auth.resetPassword);

// Logout route
router.get('/logout', auth.logout);

// Has session route
router.get('/session', auth.session);

module.exports = router;
