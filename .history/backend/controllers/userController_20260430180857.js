const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const users = await User.find().select("_id name email role");
  res.json(users);
};