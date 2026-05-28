import User from '../models/user.model.js';

exports.login = async (req, res) => {
  const { userId, password, role } = req.body;
  try {
    const user = await User.findOne({ userId, password, role });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials or role mapping mismatch.' });
    }
    res.json({
      token: `mock-jwt-token-for-${user.userId}`,
      user: { userId: user.userId, name: user.name, role: user.role }
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server operational exception.' });
  }
};
