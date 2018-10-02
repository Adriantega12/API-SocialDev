exports.User = require('./user');
exports.Post = require('./post');
exports.Comment = require('./comment');
<<<<<<< HEAD
exports.Message = require('./message');
exports.Score = require('./score');
exports.Email = require('./email');
exports.Friendship = require('./friendship');
exports.Attachment = require('./attachment');
exports.Role = require('./role')
=======
exports.Roles = require('./role')
>>>>>>> 369b2e0f60631982877c3ecc2972adefb236973e

for (var i = 0; i < 100; i++) {
  User.insert({
      roleId: i,
      email: String.valueOf(i) + '@' + String.valueOf(i) + '.com',
      password: i,
      passwordSalt: String.valueOf(i),
      passwordHash: 'SHA2',
      githubToken: String.valueOf(i),
      firstName: String.valueOf(i),
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
<<<<<<< HEAD
      isEdited: false,
=======
      isEdited: true,
>>>>>>> 369b2e0f60631982877c3ecc2972adefb236973e
  });
}

for (var i = 0; i < 100; i++) {
<<<<<<< HEAD
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

for (var i = 0; i < 100; i++) {
  Role.insert({
      roleId: i,
      name: String.valueOf(i),
  });
}
=======
  Roles.insert({
      roleId: i,
      email: String.valueOf(i) + '@' + String.valueOf(i) + '.com',
      password: i,
      passwordSalt: String.valueOf(i),
      passwordHash: 'SHA2',
      githubToken: String.valueOf(i),
      firstName: String.valueOf(i),
      lastName: String.valueOf(i),
      age: 20,
      level: 1,
      profilePic: null,
  });
}
>>>>>>> 369b2e0f60631982877c3ecc2972adefb236973e
