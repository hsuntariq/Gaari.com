const registerUser = (req, res) => {
  //data is always sent in the network body
  // frontend se data aisa lena ha

  const { name, email, phone, password, gender, image } = req.body;
  if (!name || !email || !phone || !password || !gender) {
    throw new Error("Please enter all the fields!");
  }
};

module.exports = {
  registerUser,
};
