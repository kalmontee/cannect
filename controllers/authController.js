// Dependencies
require("dotenv").config();
const db = require("../models");
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const SecretKeyAuthentication = process.env.TOKEN_PRIVATE_KEY;

module.exports = {
  // POST request
  // Creating a user account
  signUp: (req, res, next) => {
    console.log('UsersControllers.signUp() called');
    console.log(req.body)
    db.User
      .create(req.body)
      .then(dbModel => {
        res.status(201).json({ status: "success", data: dbModel });
        console.log(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },

  // GET request
  // Login in authentication
  authenticate: (req, res, next) => {
    console.log('UsersControllers.authenticate() called');
    db.User
      .findOne({ username: req.body.username })
      .then((userInfo) => {
        if (!userInfo) {
          res.status(404).json({ status: "Error", message: "Invalid email/password!!", data: userInfo })
          next(!userInfo);
        } else {
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = JWT.sign({
              name: `${userInfo.firstName} ${userInfo.lastName}`,
              sub: userInfo._id,
              iat: new Date().getTime(),
              exp: new Date().setDate(new Date().getDate() + 20)
            }, SecretKeyAuthentication);

            res.status(200).json({ status: "success", message: "user found!!!", token: token });
          }
        }
      })
      .catch(err => res.status(422).json(err));
  },

}