const usersroutes = require('express').Router();

const userRoutes = require('./userRoutes');
const cartRoutes = require('./cartRoutes');


usersroutes.use('/users', userRoutes);
usersroutes.use('/cart', cartRoutes);

module.exports = usersroutes