const express = require("express");
const { addCars } = require("../controllers/carsController");
const router = express.Router();

router.post("/add-car/:user_id", addCars);

module.exports = router;
