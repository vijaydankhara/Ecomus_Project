const User = require("../models/authModel");

module.exports = class AuthServices {
  // Add Auth
  async addNewUser(body) {
    try {
      return await User.create(body);
    } catch (error) {
      return error.message;
    }
  }

  // get singel user
  async getUser(body) {
    try {
      return await User.findOne(body);
    } catch (error) {
      return error.message;
    }
  }

  // get singel user by id
  async getUserById(body) {
    try {
      return await User.findById(id);
    } catch (error) {
      return error.message;
    }
  }
  // get all user
  async getUserById(body) {
    try {
      return await User.find(body);
    } catch (error) {
      return error.message;
    }
  }
   // Get All Users
   async getAllUsers(body){
    try {
        return await User.find(body);
    } catch (error) {
        console.log(error);
        return error.message;
    }
};

  // Update User
  async updateUser(id, body) {
    try {
      return await User.findByIdAndUpdate(id, { $set: body }, { new: true });
    } catch (error) {
      return error.message;
    }
  }
};
