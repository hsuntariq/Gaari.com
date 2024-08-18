const AsyncHander = require("express-async-handler");

const addCars = AsyncHander(async (req, res) => {
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

  //   res.send("hello");
});

module.exports = {
  addCars,
};
