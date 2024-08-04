// create the server
const express = require("express");
const { errorHandler } = require("./middlewares/errorMiddleware.js");
const { connectDB } = require("./config/connect.js");
const app = express();
// require dotenv to use .env file variables
require("dotenv").config();
// import colors library to style terminal
require("colors");

// connect to the database
connectDB();

// convert the data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// api for users
app.use("/api/users", require("./routes/userRoutes.js"));

// run error handler function/middleware
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server started in port: ${process.env.PORT.blue}`)
);
