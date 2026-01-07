const UserModel = require("../models/UserModel");

const getUserById = (req, res) => {
  const userId = req.params.id;
  const exist = UserModel.findById(userId);
  if (!exist) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(exist);
};

module.exports = {
  getUserById,
};
