const router = require("express").Router();
const userController = require("../../controllers/userController");

// router
//   .route("/test")
//   .get(userController.findFav)

// Matches with "/api/apartments"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/apartments/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;