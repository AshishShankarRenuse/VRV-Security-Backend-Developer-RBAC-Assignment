const User = require("../models/User");

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
};

module.exports = { getAllUsers };
