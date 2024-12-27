const jwt = require('jsonwebtoken');
const Admin = require('../models/authModel');
const token =  require('morgan');

exports.adminVerifyToken = async(req, res, next) => {
    try {
       const authorization = req.headers['authorization'];
       if(authorization === undefined){
             return res.json({ message: `Invalid Authorization ${console.error()}`});
       }
       const token = authorization.split(" ")[1];
    //    console.log(token);
       if (token === undefined) {
           return res.status(401).json({ message: `Unauthorize ${console.error()}`})
       }else{
            const {adminId: adminId} = jwt.verify(token, 'Admin');
            // console.log(userId);
            const admin = await Admin.findById(adminId);
            // console.log(user);
            if (admin) {
                req.admin = admin;
                next();
            }else{
                return res.status(401).json({ message: `Invalid Admin(token) ${console.error()}`});
            }
       } 
    } catch (error) {
        console.log(error);
        res.json({ message: `Internal Server Error From Admin Token ${console.error()}`});
    }
}