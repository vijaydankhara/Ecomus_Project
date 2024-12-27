const express = require('express');
const userRoutes = express.Router();
const { userVerifyToken } = require('../../middlewares/userVerifyToken');
const { adminVerifyToken } = require('../../middlewares/adminVerifyToken');

const {registerUser,loginUser,getUser,getAllUser,updateUser,deleteUser} = require('../../controller/user/userController')

userRoutes.post('/registeruser',registerUser);
userRoutes.post('/loginuser',loginUser);
userRoutes.get('/getalluser',adminVerifyToken,getAllUser);
userRoutes.get('/getuser/:id', userVerifyToken,getUser);
userRoutes.put('/updateuser/:id', userVerifyToken,updateUser);
userRoutes.delete('/deleteuser/:id',userVerifyToken,deleteUser);

module.exports = userRoutes