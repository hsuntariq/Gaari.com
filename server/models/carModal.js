const mongoose = require("mongoose");

// structure
const carSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserTable",
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    model: {
      type: Number,
      required: true,
    },
    registered: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    fuel_average: {
      type: Float32Array,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cc: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CarTable", carSchema);
