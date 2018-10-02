exports.User = require('./user');
exports.Post = require('./post');
exports.Comment = require('./comment');

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
      isEdited: true,
  });
}
