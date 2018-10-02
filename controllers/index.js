const usersController = require('./users');
const postsController = require('./posts');
const commentsController = require('./comments');
const messagesController = require('./messages');
const emailsController = require('./emails');
const friendshipsController = require('./friendships');
const scoresController = require('./scores');
const attachmentsController = require('./attachments');
const rolesController = require('./roles');

module.exports = {
  usersController,
  postsController,
  commentsController,
  messagesController,
  emailsController,
  friendshipsController,
  scoresController,
  attachmentsController,
  rolesController,
};
