const usersroutes = require('express').Router();

const userRoutes = require('./userRoutes');
const cartRoutes = require('./cartRoutes');
const wishlistRoutes = require('./wishlistRoutes')


usersroutes.use('/users', userRoutes);
usersroutes.use('/cart', cartRoutes);
usersroutes.use('/wishlish', wishlistRoutes);

module.exports = usersroutes