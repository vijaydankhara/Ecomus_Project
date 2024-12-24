const express = require('express');
const userRoutes = express.Router();

const {registerUser,loginUser} = require('../controller/authController')

userRoutes.post('/registerAuth',registerUser);
userRoutes.post('/loginuser',loginUser);

module.exports = userRoutes