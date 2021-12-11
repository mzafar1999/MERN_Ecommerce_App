const express = require('express');
const { loginUser, signupUser } = require('../controllers/userController');
const router = express.Router();

router.route('/login').post(loginUser);
router.route('/signup').post(signupUser);

module.exports = router