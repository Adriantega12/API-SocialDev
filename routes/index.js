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
const scoresRoutes = require('./scores');
const rolesRoutes = require('./roles');
const attachmentsRoutes = require('./attachments');
const populate = require('./populate');

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

// Scores
router.use('/scores', scoresRoutes);

// Roles
router.use('/roles', rolesRoutes);

// Attachments
router.use('/attachments', attachmentsRoutes);

// Populate
router.use('/populate', populateRoutes);

module.exports = router;
