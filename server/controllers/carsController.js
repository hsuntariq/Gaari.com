const AsyncHander = require("express-async-handler");
const carModal = require("../models/carModal");

const addCars = AsyncHander(async (req, res) => {
  const user_id = req.params.user_id;
  const {
    brand,
    image,
    model,
    registered,
    mileage,
    fuel_average,
    color,
    price,
    cc,
    description,
  } = req.body;

  if (
    !brand ||
    !image ||
    !model ||
    !registered ||
    !mileage ||
    !fuel_average ||
    !color ||
    !price ||
    !cc ||
    !description
  ) {
    res.status(400);
    throw new Error("Please enter all the fields");
  }

  const createdData = await carModal.create({
    user: user_id,
    brand,
    image,
    model,
    registered,
    mileage,
    fuel_average,
    color,
    price,
    cc,
    description,
  });

  res.send(createdData);

  //   res.send("hello");
});

const getCars = AsyncHander(async (req, res) => {
  const cars = await carModal.find();
  res.send(cars);
});

module.exports = {
  addCars,
  getCars,
};
