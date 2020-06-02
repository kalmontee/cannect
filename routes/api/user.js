const router = require("express").Router();
const userController = require("../../controllers/userController");

router
  .route("/signUp")
  .post(userController.signUp);

router
  .route("/authenticate")
  .get(userController.authenticate);

module.exports = router;