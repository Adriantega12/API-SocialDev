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
const friendshipsRoutes = require('./friendships');

// Test
router.get('/', (req, res) => { res.send('Principal'); });

// Users
router.use('/users', usersRoutes);

// Posts
router.use('/posts', postsRoutes);

// Comments
router.use('/comments', commentsRoutes);

// Messages
router.use('/messages', messagesRoutes);

// Friendships
router.use('/friendships', friendshipsRoutes);

module.exports = router;
