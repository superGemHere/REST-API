const bcrypt = require('bcrypt');
const {SECRET_JWT} = require('../constants');
const jwt = require('../lib/jsonwebtoken')
const User = require('../models/User')

exports.login = async (email, password) => {
    // find user
  
    const user = await this.findOne({email});
  
    // console.log(user);
  
    if (!user) {
      throw new Error("Invalid email or password !");
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      throw new Error("Invalid email or password !");
    }
  
    // create the payload
    const payload = {
      _id: user._id,
      email: user.email,
      username: user.username,
    };
  
    // generate the token
    const token = await jwt.sign(payload, SECRET_JWT, { expiresIn: "2d" });
  
    // if everything goes right return the generated token
    return {
        _id: user._id,
        email: user.email,
        accesstoken: token,
    }
  };
  

exports.register = async (username, email, password, repeatPassword) => {
  if (password !== repeatPassword) {
    throw new Error("Passwords do not match");
  }

  const existingUser = await User.findOne({
    $or: [
        { email }, 
        { username },
    ]
  });

  if(existingUser) {
    throw new Error('User exists');
  }

  if(password.length < 4) {
    throw new Error('Password too short(min 4 characters)');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({username, email, password: hashedPassword});

  return this.login(email, password)
};


