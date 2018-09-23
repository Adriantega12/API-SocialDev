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

router.get('/', (req, res) => { res.send('Principal'); });

// Users
router.use('/users/', usersRoutes);

// Posts
router.use('/users/:userId/posts', postsRoutes);

// Comments
router.use('/users/:userId/posts/:postId', commentsRoutes);

// User and Comments
// INDEX
router.get('/users/:userId/comments', (req, res) => {
	res.send('INDEX');
});

// Messages
router.use('/users/:userId/messages', messagesRoutes);

module.exports = router;
