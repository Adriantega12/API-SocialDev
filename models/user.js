const db = require('../db');
// const { Datetime } = require('../middlewares');

// FIXME Todos los metodos deben estar documentados
class User {
  /**
   * Constructor for class User.
   * @param  {number} id           Unique value, identifies a unique user.
   * @param  {number} roleId       Indicates the permissions the user has.
   * @param  {string} email        Main email of the user.
   * @param  {string} password     Hashed password of the user.
   * @param  {string} githubToken  Token to login with Github.
   * @param  {string} firstName    User's first name.
   * @param  {string} lastName     User's last name.
   * @param  {number} age          User's age.
   * @param  {number} level        User's level for the gamefication of SocialDev.
   * @param  {string} profilePic   User's route to profilePic.
   * @return {User}                New instance of a User.
   */
  constructor({
    id,
    roleId,
    email,
    password,
    githubToken,
    firstName,
    lastName,
    age,
    level = 1,
    profilePic,
  }) {
    this.id = id;
    this.roleId = roleId;
    this.email = email;
    this.password = password;
    this.githubToken = githubToken;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.level = level;
    this.profilePic = profilePic;
  }

  static async getAll() {
    let data;

    try {
      data = await db.getAll('users');
    } catch (error) {
      throw error;
    }

    const response = [];

    data.forEach((row) => {
      response.push(new User(row));
    });

    return response;
  }

  static async get(userId) {
    let data = [];
    let role;
    let emails;
    let posts;
    let comments;
    let scores;
    let friends;
    let sentMessages;
    let receivedMessages;
    let user;

    try {
      data = await db.get('users', '*', userId);
      if (data.length !== 0) {
        role = (await db.get('roles', '*', data[0].roleId))[0].name;
        emails = (await db.getObjectByForeignId('emails', '*', 'userId', userId)).map(email => email.email);
        posts = await db.getObjectByForeignId('posts', '*', 'userId', userId);
        comments = await db.getObjectByForeignId('comments', '*', 'userId', userId);
        scores = await db.getObjectByForeignId('scores', '*', 'userId', userId);
        friends = await this.getFriendlist(userId);
        sentMessages = await db.getObjectByForeignId('messages', '*', 'senderId', userId);
        receivedMessages = await db.getObjectByForeignId('messages', '*', 'receiverId', userId);
      }
    } catch (error) {
      throw error;
    }

    if (data.length !== 0) {
      // Creating user from model data
      user = new User(data[0]);
      // Adding relevant data
      user.role = role;
      user.emails = emails;
      user.posts = posts.map((post) => {
        const d = new Date(post.date);
        return {
          id: post.id,
          title: post.title,
          excerpt: `${post.text.substring(0, 256)}...`,
          author: `${user.firstName} ${user.lastName}`,
          // date: Datetime.toJSFromMySQL(post.date),
          date: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
          score: post.score,
          // path: I have some ideas for this
        };
      });
      user.comments = comments.map((comment) => {
        const d = new Date(comment.date);
        return {
          ...comment,
          // date: Datetime.toJSFromMySQL(comment.date),
          date: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
        };
      });
      user.scores = scores.map((score) => {
        const d = new Date(score.date);
        return {
          ...score,
          // date: Datetime.toJSFromMySQL(score.date),
          date: `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`,
        };
      });
      user.friends = friends.map((friend) => {
        return { ...friend };
      });
      user.sentMessages = sentMessages;
      user.receivedMessages = receivedMessages;
    } else {
      user = data; // data here is an empty array, so will user.
    }

    return user;
  }

  static async getByEmail(email) {
    let data = [];

    try {
      data = await db.getObjectByForeignId('users', '*', 'email', email);
    } catch (error) {
      throw error;
    }

    return data.length !== 0 ? new User({
      ...data[0],
    }) : data;
  }

  static async insert(user) {
    let id;
    let email;

    try {
      const response = await db.insert('users', user);
      id = response.insertId;
      email = { email: user.email, userId: id };
      await User.addEmail(email);
    } catch (error) {
      throw error;
    }

    const emails = [email.email];
    const posts = [];
    const comments = [];
    const friends = [];
    const sentMessages = [];
    const receivedMessages = [];
    const roles = [];

    return new Promise(resolve => resolve(id > 0 ? new User({
      id,
      ...user,
      emails,
      posts,
      comments,
      friends,
      sentMessages,
      receivedMessages,
      roles,
    }) : []));
  }

  async update(keyVals) {
    let updatedRows;

    try {
      const results = await db.update('users', keyVals, this.id);
      updatedRows = results.affectedRows;
      if (updatedRows > 0) {
        Object.keys(keyVals).forEach((key) => {
          this[key] = keyVals[key];
        });
      }
    } catch (error) {
      throw error;
    }

    return updatedRows > 0;
  }

  static async delete(userId) {
    let deletedRows;
    let deletedPostsRows;
    let deletedCommentsRows;
    let deletedEmailsRows;

    try {
      const resPosts = await db.deleteFromUser('posts', userId);
      const resComments = await db.deleteFromUser('comments', userId);
      const resEmails = await db.deleteFromUser('emails', userId);
      const resTokens = await db.deleteFromUser('tokens', userId);
      const results = await db.delete('users', userId);
      deletedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return deletedRows > 0;
  }

  static async getFriends(userId) {
    let data;

    try {
      data = await this.getFriendlist(userId);
    } catch (error) {
      throw error;
    }

    const response = [];

    data.forEach((row) => {
      response.push(row);
    });

    return response;
  }

  static async addFriend(friendship) {
    let id;

    try {
      const result = await db.getFriendship(friendship.userOneId, friendship.userTwoId);
      if (result.length > 0) {
        const error = {
          message: 'Friendship already exists.',
          status: 409,
        };
        throw error;
      }
      const response = await db.insert('friendships', friendship);
      id = response.insertId;
    } catch (error) {
      throw error;
    }

    return id > 0 ? friendship : [];
  }

  static async getFriendlist(userId) {
    let data;

    try {
      data = await db.getFriends(userId);
    } catch (error) {
      throw error;
    }

    const friends = [];
    data.forEach((friendship) => {
      const friend = {};
      for (const key in friendship) {
        if (key === 'userOneId' || key === 'userTwoId') {
          if (friendship[key] !== userId) {
            friend.friendId = friendship[key];
          }
        } else {
          friend[key] = friendship[key];
        }
      }
      friends.push(friend);
    });

    return friends;
  }

  static async getFeed(userId, page = 0, perPage = 10) {
    let friendList = [];
    const collection = [];

    try {
      friendList = await this.getFriendlist(userId);
      const myFriendsPostsPromises = await friendList.map(async (friend) => {
        const userPosts = await db.getObjectByForeignId('posts', '*', 'userId', friend.friendId);
        if (userPosts.length > 0) {
          const userName = await User.getUserFullName(friend.friendId);
          for (const index in userPosts) {
            userPosts[index].author = userName;
          }
          collection.push(...userPosts);
        }
      });
      await Promise.all(myFriendsPostsPromises);
    } catch (error) {
      throw error;
    }

    const posts = collection.sort((postA, postB) => {
      return postB.id - postA.id;
    });

    return posts.slice(page * perPage, page * perPage + perPage);
  }

  // Email
  static async getEmails(userId) {
    let data;
    try {
      data = await db.getObjectByForeignId('emails', '*', 'userId', userId);
    } catch (error) {
      throw error;
    }
    const response = [];

    data.forEach((row) => {
      response.push(row);
    });

    return response;
  }

  static async addEmail(email) {
    let id;

    try {
      const response = await db.insert('emails', email);
      id = response.insertId;
    } catch (error) {
      throw error;
    }
    return id > 0 ? { email } : [];
  }

  static async deleteEmail(emailName) {
    let deletedRows;

    try {
      const results = await db.deleteEmail('emails', emailName);
      deletedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return deletedRows > 0;
  }

  // Extra data
  static async getUserFullName(userId) {
    const user = await db.get('users', ['firstName', 'lastName'], userId);
    return `${user[0].firstName} ${user[0].lastName}`;
  }
}

module.exports = User;
