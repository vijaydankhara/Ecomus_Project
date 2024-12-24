const AuthServices = require('../services/authServices');
const authServices = new AuthServices();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req, res) => {
    try {
        let admin = await authServices.getUser({ email: req.body.email });
        console.log(admin);
        if(admin){
            return res.status(400).json({ message: `Admin is Already Registerd...`});
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashPassword);
        admin = await authServices.addNewUser({
            ...req.body,
            password: hashPassword,
            isAdmin: true
        });
        res.status(201).json({admin: admin, message: `New Admin Is Added SuccesFully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}`});
    } 
};


 