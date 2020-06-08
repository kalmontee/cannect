const router = require("express").Router();
const authController = require("../../controllers/authController");

router
  .route("/login")
  .post(authController.authenticate)
  .post(authController.signUp);

module.exports = router;