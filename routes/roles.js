const router = require('express').Router();
const { rolesController } = require('../controllers');
const { validator } = require('../middlewares');


// INDEX Roles
router.get('/', rolesController.getAll);

// NEW Role
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      name: 'required word',
      canReadPosts: 'required boolean',
      canWritePosts: 'required boolean',
      canEditOwnPosts: 'required boolean',
      canDeleteOwnPosts: 'required boolean',
      canEditOthersPosts: 'required boolean',
      canDeleteOthersPosts: 'required boolean',
      canManageOtherUsersPost: 'required boolean',
    },
  });
}, rolesController.insert);

// SHOW Role
router.get('/:roleId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      roleId: 'integer',
    },
  });
}, rolesController.get);

// UPDATE Role
router.put('/:roleId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      roleId: 'integer',
    },
    body: {
      name: 'word',
      canReadPosts: 'boolean',
      canWritePosts: 'boolean',
      canEditOwnPosts: 'boolean',
      canDeleteOwnPosts: 'boolean',
      canEditOthersPosts: 'boolean',
      canDeleteOthersPosts: 'boolean',
      canManageOtherUsersPost: 'boolean',
    },
  });
}, rolesController.update);

// DESTROY Role
router.delete('/:roleId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      roleId: 'integer',
    },
  });
}, rolesController.delete);

module.exports = router;
