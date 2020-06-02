const router = require("express").Router();
const userRoutes = require("./user");

// User routes
router.use("/signUp", userRoutes);
router.use("/authenticate", userRoutes);

module.exports = router;