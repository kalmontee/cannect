const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Define a Schema
const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
});

// hash user password before saving into database
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;