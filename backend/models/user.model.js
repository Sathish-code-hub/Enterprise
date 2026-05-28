const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  name: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'General User'], required: true },
  records: [{ title: String, date: String, status: String }]
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
module.exports = User;
