const db = require('../db');

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
   * @param  {[type]} emails       [description]
   * @param  {[type]} comments     [description]
   * @param  {[type]} posts        [description]
   * @param  {[type]} friends      [description]
   * @param  {[type]} messages     [description]
   * @param  {[type]}              [description]
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
    level,
    profilePic,
    emails,
    comments,
    posts,
    friends,
    messages,
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
    this.emails = emails;
    this.posts = posts;
    this.comments = comments;
    this.friends = friends;
    this.messages = messages;
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
    let data;
    let emails;
    let posts;
    let comments;
    let friends;
    let messages;

    try {
      data = await db.get('users', '*', userId);
      emails = (await db.getObjectByForeignId('emails', '*', 'userId', userId)).map((email) => {
        return email.email;
      });
      posts = await db.getObjectByForeignId('posts', '*', 'authorId', userId);
      comments = await db.getObjectByForeignId('comments', '*', 'authorId', userId);
      friends = await this.getFriendlist(userId);
      messages = await db.getObjectByForeignId('messages', '*', 'senderId', userId);
    } catch (error) {
      throw error;
    }

    return data.length !== 0 ? new User({
      ...data[0],
      emails,
      posts,
      comments,
      friends,
      messages,
    }) : data;
  }

  static async insert(user) {
    let id;

    try {
      const response = await db.insert('users', user);
      id = response.insertId;
    } catch (error) {
      throw error;
    }

    const emails = [];
    const posts = [];
    const comments = [];
    const friends = [];
    const messages = [];
    const roles = [];

    return new Promise((resolve, reject) => {
      return id > 0 ? resolve(new User({
        id,
        ...user,
        emails,
        posts,
        comments,
        friends,
        messages,
        roles,
      })) : reject([]);
    });
  }

  async update(keyVals) {
    let updatedRows;

    try {
      const results = await db.update('users', keyVals, this.id);
      updatedRows = results.affectedRows;
    } catch (error) {
      throw error;
    }

    return updatedRows > 0;
  }

  static async delete(userId) {
    let deletedRows;

    try {
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

  static async getFeed(userId) {
    let friendList = [];
    let friendPosts = [];
    const posts = [];

    try {
      friendList = await this.getFriendlist(userId);
      const myFriendsPostsPromises = friendList.map(async (friend) => {
        friendPosts = await db.getObjectByForeignId('posts', '*', 'authorId', friend.friendId);
        posts.push(...friendPosts);
      });
      await Promise.all(myFriendsPostsPromises);
    } catch (error) {
      throw error;
    }

    return posts;
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
}

module.exports = User;
