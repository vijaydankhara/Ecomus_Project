const express = require('express');
const adminRoutes = express.Router();
const { adminVerifyToken } = require('../../middlewares/adminVerifyToken');

const {registerAdmin,loginAdmin,getAdmin,updateAdmin,deleteAdmin} = require('../../controller/admin/adminController')

adminRoutes.post('/registeradmin',registerAdmin);
adminRoutes.post('/loginadmin',loginAdmin);
adminRoutes.get('/getadmin/:id', adminVerifyToken,getAdmin);
// adminRoutes.get('/getalladmin',adminVerifyToken,getAllAdmin);
adminRoutes.put('/updateadmin/:id', adminVerifyToken,updateAdmin);
adminRoutes.delete('/deleteadmin/:id',adminVerifyToken,deleteAdmin);

module.exports = adminRoutes