const adminsroutes  = require('express').Router();

const adminRoutes =require('./AdminRoutes');
const productRoutes = require('./ProductRoutes');

adminsroutes.use('/admin-user',adminRoutes);
adminsroutes.use('/product',productRoutes);



module.exports = adminsroutes