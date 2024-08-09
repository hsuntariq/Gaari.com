// routing for user api
// require express, because we have a router in express
const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
module.exports = router;
