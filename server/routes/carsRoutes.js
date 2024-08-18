const express = require("express");
const { addCars } = require("../controllers/carsController");
const router = express.Router();

router.post("/add-car", addCars);

module.exports = router;
