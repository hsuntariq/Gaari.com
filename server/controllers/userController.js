const userModal = require("../models/userModal");
const expressAsyncHandler = require("express-async-handler");
const encrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

// make a function to register the user
const registerUser = expressAsyncHandler(async (req, res) => {
  // get the data from the user
  const { myName, myEmail, myPhone, myPassword, myGender, myImage } = req.body;
  if (!myName || !myEmail || !myPhone || !myPassword || !myGender) {
    throw new Error("Please enter all the fields!");
  }

  try {
    // check if email already exists/present
    const findUser = await userModal.findOne({ email: myEmail });

    if (findUser) {
      throw new Error("User already exists!");
    }

    // send the data to the user table/collection

    // hash the password
    const hashedPassword = await encrypt.hash(myPassword, 10);

    const createdUser = await userModal.create({
      name: myName,
      email: myEmail,
      phone: myPhone,
      password: hashedPassword,
      gender: myGender,
      image: myImage,
    });

    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      phone: createdUser.phone,
      password: createdUser.password,
      gender: createdUser.gender,
      image: createdUser.image,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// login function

const loginUser = expressAsyncHandler(async (req, res) => {
  // get the data from the password
  const { myEmail, myPassword } = req.body;
  if (!myEmail || !myPassword) {
    throw new Error("Please enter the fields");
  }

  // check from the database, if user exists
  const findUser = await userModal.findOne({ email: myEmail });

  if (!findUser) {
    res.status(404);
    throw new Error("Invalid Email");
  }

  if (findUser && (await encrypt.compare(myPassword, findUser.password))) {
    res.send({
      _id: findUser._id,
      name: findUser.name,
      email: findUser.email,
      phone: findUser.phone,
      password: findUser.password,
      gender: findUser.gender,
      image: findUser.image,
    });
  } else {
    res.status(401);
    throw new Error("Invalid password");
  }
});

module.exports = {
  registerUser,
  loginUser,
};
