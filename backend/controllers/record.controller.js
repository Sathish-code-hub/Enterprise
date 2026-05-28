const User = require('../models/user.model');

exports.getUserRecords = async (req, res) => {
  try {
    const user = await User.findOne({ userId: req.params.userId });
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.json(user.records);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving scoped logs.' });
  }
};
