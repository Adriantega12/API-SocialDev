const router = require('express').Router();
const multer = require('multer');
const { usersController } = require('../controllers');
const {
  validator, FileHandler, auth, Authorizer,
} = require('../middlewares');

const upload = multer({ dest: 'tmp/' });

// INDEX User
router.get('/', usersController.getAll);

// NEW User
router.post('/', [
  upload.fields([{ name: 'profilePic', maxCount: 1 }]), // Upload profile picture
  (req, res, next) => { // Params and body validation
    validator.validate(req, res, next, {
      body: {
        email: 'required email',
        password: 'required specialalphanum',
        githubToken: 'specialalphanum',
        firstName: 'word',
        lastName: 'word',
        age: 'integer',
        level: 'integer',
      },
    });
  },
  FileHandler.moveFiles, // Move profile picture to correct folder
  (req, res, next) => {
    [req.body.profilePic] = req.filePaths;
    next();
  },
], usersController.insert);

// SHOW User
router.get('/:userId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.get);

// UPDATE User
router.put('/:userId', [
  upload.fields([{ name: 'profilePic', maxCount: 1 }]), // Upload profile picture
  (req, res, next) => { // Params and body validation
    validator.validate(req, res, next, {
      params: {
        userId: 'integer',
      },
      body: {
        roleId: 'integer',
        email: 'email',
        password: 'specialalphanum',
        githubToken: 'specialalphanum',
        firstName: 'word',
        lastName: 'word',
        age: 'integer',
        level: 'integer',
      },
    });
  },
  FileHandler.moveFiles, // Move profile picture to correct folder
  (req, res, next) => {
    if (req.filePaths.length > 0) {
      [req.body.profilePic] = req.filePaths;
    }
    next();
  },
], usersController.update);

// DESTROY User
router.delete('/:userId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.delete);

// Friendships
// INDEX Friendship
router.get('/:userId/friendships', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.getFriends);

// NEW Friendship
router.post('/:userId/friendships/:friendId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
      friendId: 'integer',
    },
  });
}, usersController.addFriend);

// User Feed
router.get('/:userId/feed', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      userId: 'integer',
    },
  });
}, usersController.getFeed);

// INDEX emails
router.get('/:userId/emails', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        userId: 'integer',
      },
    });
  },
  auth.haveSession,
  (req, res, next) => {
    Authorizer.authorize(req, res, next, {
      user: 'isUser',
    });
  },
], usersController.getEmails);

// NEW email
router.post('/:userId/emails', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        userId: 'integer',
      },
    });
  },
  auth.haveSession,
  (req, res, next) => {
    Authorizer.authorize(req, res, next, {
      user: 'isUser',
    });
  },
], usersController.addEmail);

// DELETE email
router.delete('/:userId/emails', [
  (req, res, next) => {
    validator.validate(req, res, next, {
      params: {
        userId: 'integer',
      },
      body: {
        email: 'email',
      },
    });
  },
  auth.haveSession,
  (req, res, next) => {
    Authorizer.authorize(req, res, next, {
      user: 'isUser',
    });
  },
], usersController.deleteEmail);

module.exports = router;
