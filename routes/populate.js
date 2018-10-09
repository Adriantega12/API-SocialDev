const router = require('express').Router();
const { factory } = require('../factory');


router.get('/', factory.doFactory);
