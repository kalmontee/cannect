const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./user");

// User routes
router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;