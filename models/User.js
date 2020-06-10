const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Define a Schema
const Schema = mongoose.Schema

const UserSchema = new Schema({
  fullName: {
    first: { type: String },
    last: { type: String }
  },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },

  profileInfo: {
    profileImage: {
      type: String,
      dummy_url: 'https://www.good-samaritan.org/sites/default/files/styles/user_photo/public/default_images/profil-pic_dummy.png?itok=u636zuzc'
    },
    headerPhoto: { type: String },
    bio: { type: String },
    location: { type: String },
    birthDate: { type: String },
    website: { URL: String },
  },

  content: [
    {
      post: [{ description: String, comments: String, datePosted: Date }],
      comments: [{ type: String, type: Date, default: Date.now }],
      favorites: [{ type: Boolean, numOfLikes: Number, accountName: String, type: Date, default: Date.now }],
      followers: [{ numOfFollowers: Number, accountName: String, type: Date, default: Date.now }],
      following: [{ numOfFollowing: Number, accountName: String, type: Date, default: Date.now }],
    }
  ],

  dateCreated: { type: Date, default: Date.now },
});

// hash user password before saving into database
UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;