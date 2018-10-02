const router = require('express').Router();
const { emailsController } = require('../controllers');
const { validator } = require('../middlewares');

// INDEX Email
router.get('/', emailsController.getAll);

// NEW Email
router.post('/', (req, res, next) => {
  validator.validate(req, res, next, {
    body: {
      userId: 'required integer',
      email: 'required email',
    },
  });
}, emailsController.insert);

// SHOW Email
router.get('/:emailId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      emailId: 'integer',
    },
  });
}, emailsController.get);

// UPDATE Email
router.put('/:emailId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      emailId: 'integer',
    },
    body: {
      userId: 'integer',
      email: 'email',
    },
  });
}, emailsController.update);

// DESTROY Email
router.delete('/:emailId', (req, res, next) => {
  validator.validate(req, res, next, {
    params: {
      emailId: 'integer',
    },
  });
}, emailsController.delete);

module.exports = router;
