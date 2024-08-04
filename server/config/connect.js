// connect to the database
const mongoose = require("mongoose");
// make a function to connect to the database

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`database connected on host:${mongoose.connection.host.cyan}`);
};

module.exports = { connectDB };
