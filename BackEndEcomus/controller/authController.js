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

// Get All User
exports.getAllUser = async(req, res) => {
    try {
        let users = await userService.getAllUsers({ isDelete: false});
        console.log(users);
        if(!users){
            return res.status(404).json({ message: `Users Data Not Found Please Try Again..!`});
        }
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error...${console.error()}`})        
    }
};
exports.getUser = async (req, res) => {
    try {
      const userId = req.params.id; // Use params instead of query
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User Not Found. Please Try Again." });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Internal Server Error` });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const userId = req.params.id; // Use params instead of query
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ message: "User Not Found. Please Try Again." });
      }
      const updatedUser = await userService.updateUser(userId, req.body);
      res.status(200).json({ user: updatedUser, message: "User Details Updated Successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Internal Server Error` });
    }
  };
  
// Delete User
exports.deleteUser = async(req, res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        if(!user){
            return res.status(404).json({message: `User Not Found...Please Try Again`})
        }
        user = await userService.updateUser(user._id, {isDelete: true});
        res.status(200).json({mmessage: `User Deleted SuccesFully.....`})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error...${console.error()}`});
    }
};


