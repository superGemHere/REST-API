const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../constants.js");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true,"Username is required !"],
    minLength: [5, 'Username must be atleast 5 chars long'],
    unique: true,
  },
  email: {
    type: String,
    required: [true,"Email is required ! !"],
    minLength: [10, 'Email must be atleast 10 chars long'],
  },
  password: {
    type: String,
    required: [true,"Password is required !"],
    minLength: [4, 'Password must be atleast 4 chars long'],
  },
});

userSchema.virtual("repeatPassword").set(function (value) {
  if (this.password !== value) {
    throw new Error("Password missmatch !");
  }
});

userSchema.pre("save", async function () {
  const hash = await bcrypt.hash(this.password, SALT_ROUNDS);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;