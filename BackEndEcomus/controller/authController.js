const AuthServices = require('../services/authServices');
const authServices = new AuthServices();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        let admin = await authServices.getUser({ email: req.body.email });
        // console.log(admin);
        if (admin) {
            return res.status(400).json({ message: `Admin is Already Registerd...` });
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashPassword);
        admin = await authServices.addNewUser({
            ...req.body,
            password: hashPassword,

        });
        res.status(201).json({ admin: admin, message: `New Admin Is Added SuccesFully...` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}` });
    }
};


// Login User

exports.loginUser = async (req, res) => {
    try {
        let user = await authServices.getUser({ email: req.body.email, isAdmin: false });
        console.log("user is -->", user);
        if (!user) {
            return res.status(400).json({ message: 'Email IS Not Found' });
        }
        let chackPassword = await bcrypt.compare(req.body.password, user.password);
        if (!chackPassword) {
            return res.status(401).json({ message: 'Password IS Not Match' });
        }
        let token = jwt.sign({ userId: user._id }, 'User');
        console.log('token is ', token);
        res.status(200).json({ token, message: 'Login Successfully' });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error...${console.error()}` })

    }
}


