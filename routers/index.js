const { Router } = require('express');
const bodyParser = require('body-parser');

const router = Router();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// Router requires
const usersRoutes = require('./users');
const postsRoutes = require('./posts');
const commentsRoutes = require('./comments');
const messagesRoutes = require('./messages');
const emailsRoutes = require('./emails');

// Test
router.get('/', (req, res) => { res.send('Principal'); });

// Users
router.use('/users', usersRoutes);

// Posts
router.use('/posts', postsRoutes);

// Comments
router.use('/posts/:postId/comments', commentsRoutes);

// Messages
router.use('/users/:userId/messages', messagesRoutes);

// Emails
router.use('/users/:userId/emails', emailsRoutes);

module.exports = router;