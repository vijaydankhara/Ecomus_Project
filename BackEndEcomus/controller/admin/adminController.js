const AuthServices = require('../../services/authServices');
const authServices = new AuthServices();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Rergister Admin
exports.registerAdmin = async (req, res) => {
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
            isAdmin: true,

        });
        res.status(201).json({ admin: admin, message: `New Admin Is Added SuccesFully...` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}` });
    }
};



// Login Admin
exports.loginAdmin = async (req, res) => {
    try {
        let admin = await authServices.getUser({ email: req.body.email, isAdmin: true });
        console.log("Admin is -->", admin);
        if (!admin) {
            return res.status(400).json({ message: 'Email IS Not Found' });
        }
        let chackPassword = await bcrypt.compare(req.body.password, admin.password);
        if (!chackPassword) {
            return res.status(401).json({ message: 'Password IS Not Match' });
        }
        let token = jwt.sign({ adminId: admin._id }, 'Admin');
        console.log('token is ', token);
        res.status(200).json({ token, message: 'Login Successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error...${console.error()}` })
    }
}

// Get Admin
exports.getAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await authServices.getUserById(id);
        if (!admin) {
            return res.status(404).json({ msg: "Admin Not Found" });
        }
        res.status(200).json(admin)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllAdmin = async (req, res) => {
    try {
        const admins = await authServices.getAllUsers({ isAdmin: true });
        console.log('users is --> ', admins);
        if (!admins) {
            return res.status(404).json({ message: `Users Data Not Found Please Try Again..!` });
        }
        res.status(200).json(admins);
        console.log('users is --> ', admins);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error...${console.error()}` })
    }
};

//   Update Admin
exports.updateAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        const admin = await authServices.getUserById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin Not Found. Please Try Again." });
        }
        const updatedAdmin = await authServices.updateUser(adminId, req.body);
        res.status(200).json({ user: updatedAdmin, message: "Admin Details Updated Successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Internal Server Error` });
    }
};

// Delete Admin
exports.deleteAdmin = async (req, res) => {
    try {
        let admin = await authServices.getUserById(req.query.userId);
        if (!admin) {
            return res.status(404).json({ message: `Admin Not Found...Please Try Again` })
        }
        admin = await authServices.updateUser(admin._id, { isDelete: true });
        res.status(200).json({ mmessage: `Admin Deleted SuccesFully.....` })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error...${console.error()}` });
    }
};


