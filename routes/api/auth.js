const router = require("express").Router();
const authController = require("../../controllers/authController");

router
  .route("/")
  .get(authController.authenticate)
  .post(authController.signUp);

module.exports = router;