const User = require('../models/user.model');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Access Denied or Server Error.' });
  }
};
