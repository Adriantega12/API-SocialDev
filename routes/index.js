const { Router } = require('express');
const router = Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const postsRoutes = require('./posts');
const messagesRoutes = require('./messages');

router.use('/users/:userId/posts', postsRoutes);
router.use('/users/:userId/messages', messagesRoutes);

module.exports = router;
