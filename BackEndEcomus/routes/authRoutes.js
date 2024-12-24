const express = require('express');
const userRoutes = express.Router();

const {registerUser} = require('../controller/authController')

userRoutes.post('/registerAuth',registerUser);

module.exports = userRoutes