const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

// Add a new user
router.post("/add", userController.Adduser);

// Get all users
router.get("/display", userController.display);

module.exports = router;
