const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', UserController.register);
router.post('/authenticate', UserController.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, UserController.userProfile);

module.exports = router;
