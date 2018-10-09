const { User } = require('../models/role');
const { Post } = require('../models/post');
const { Comment } = require('../models/comment');
const { Message } = require('../models/message');
const { Score } = require('../models/score');
const { Email } = require('../models/email');
const { Friendship } = require('../models/friendship');
const { Attachment } = require('../models/attachment');
const { Role } = require('../models/role');

class Factory {

   doFactory(){

    for (var i = 0; i < 100; i++) {
      Role.insert({
          name: 'name' + String.valueOf(i),
          canReadPosts: true,
          canWritePosts: true,
          canEditOwnPosts: true,
          canDeleteOwnPosts: false,
          canEditOthersPosts: false,
          canDeleteOthersPosts: false,
          canManageOtherUsersPost: false,
      });
    }

    for (var i = 0; i < 100; i++) {
      User.insert({
          roleId: i,
          email: String.valueOf(i) + '@' + String.valueOf(i) + '.com',
          password: i,
          passwordSalt: String.valueOf(i),
          passwordHash: 'SHA2',
          githubToken: String.valueOf(i),
          firstName: 'user ' + String.valueOf(i),
          lastName: String.valueOf(i),
          age: 20,
          level: 1,
          profilePic: null,
      });
    }

    for (var i = 0; i < 100; i++) {
      Post.insert({
          authorId: i,
          title: 'TITLE' + String.valueOf(i),
          text: 'lorem',
          date: '2018-10-01 05:40:06',
          score: 0,
      });
    }

    for (var i = 0; i < 100; i++) {
      Comment.insert({
          postId: i,
          authorId: i,
          date: '2018-10-01 05:40:06',
          content: 'lorem',
          isEdited: false,
      });
    }

    for (var i = 0; i < 100; i++) {
      Message.insert({
          senderId: i,
          receiverId: i,
          text: 'lorem',
          date: '2018-10-01 05:40:06',
      });
    }

    for (var i = 0; i < 100; i++) {
      Score.insert({
          postId: i,
          userId: i,
          score: 0,
          date: '2018-10-01 05:40:06',
      });
    }

    for (var i = 0; i < 100; i++) {
      Email.insert({
          userId: i,
          email: String.valueOf(i) + '@' + String.valueOf(i) + '.com',
      });
    }

    for (var i = 0; i < 100; i++) {
      Friendship.insert({
          userOneId: i,
          userTwoId: i,
          lastActionId: 0,
          date: '2018-10-01 05:40:06',
          status: 0,
      });
    }

    for (var i = 0; i < 100; i++) {
      Attachment.insert({
          postId: i,
          data: null,

      });
    }
  }
}

module.exports = new Factory();