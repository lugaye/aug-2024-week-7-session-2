//import
const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

//user registration
router.post('/register', registerUser)

module.exports = router;
