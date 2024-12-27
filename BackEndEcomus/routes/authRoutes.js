const express = require('express');
const userRoutes = express.Router();
const { userVerifyToken } = require('../middlewares/userVerifyToken');

const {registerUser,loginUser,getUser,getAllUser,updateUser,deleteUser} = require('../controller/authController')

userRoutes.post('/registerAuth',registerUser);
userRoutes.post('/loginuser',loginUser);
userRoutes.get('/getuser/:id', userVerifyToken,getUser);
userRoutes.get('/getalluser',userVerifyToken,getAllUser);
userRoutes.put('/updateuser/:id', userVerifyToken,updateUser);
userRoutes.delete('/deleteuser/:id',userVerifyToken,deleteUser);

module.exports = userRoutes