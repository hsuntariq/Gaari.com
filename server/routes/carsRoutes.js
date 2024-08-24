const express = require("express");
const { addCars, getCars } = require("../controllers/carsController");
const router = express.Router();

router.post("/add-car/:user_id", addCars);
router.get("/get-cars", getCars);

module.exports = router;
