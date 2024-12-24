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
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    isDelete: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('User', authSchema);
