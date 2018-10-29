const router = require('express').Router();
const { auth, Authorizer } = require('../middlewares');

// Register route
router.post('/register', auth.register);

// Login route
router.post('/login', auth.login);

// Logout route
router.get('/logout', auth.logout);

module.exports = router;