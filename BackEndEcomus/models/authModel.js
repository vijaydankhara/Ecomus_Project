const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    mobileNo: {
      type: Number,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
      enum: ["Male", "Female", "Other"],
    },
    dateOfBirth: {
      type: Date,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.Now,
    },
    updatedAt: {
      type: Date,
      default: Date.Now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports =mongoose.model('User',authSchema);
