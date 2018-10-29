const { Router } = require('express');


const router = Router();

// Router requires
const usersRoutes = require('./users');
const postsRoutes = require('./posts');
// const commentsRoutes = require('./comments');
const messagesRoutes = require('./messages');
const authRoutes = require('./auth');

// Test
router.get('/', (req, res) => { res.send('Principal'); });

// Users
router.use('/users', usersRoutes);

// Posts
router.use('/posts', postsRoutes);

// Comments
// router.use('/posts/:postId/comments', commentsRoutes);

// Messages
router.use('/messages', messagesRoutes);

// Auth
router.use('/auth', authRoutes);

module.exports = router;
