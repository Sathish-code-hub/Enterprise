require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const User = require('./models/user.model');

// Mount Separated Architecture Routing Blocks
const authRoutes = require('./routes/auth.routes');
const recordRoutes = require('./routes/record.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());


connectDB();


async function seedDatabase() {
  try {
    const count = await User.countDocuments();
    if (count === 0) {
      await User.create([
        {
          userId: 'admin01',
          password: 'password123',
          name: 'Divya (System Administrator)',
          role: 'Admin',
          records: [
            { title: 'System Health Check', date: '2026-05-25', status: 'Healthy' },
            { title: 'Database Security Audit', date: '2026-05-26', status: 'Passed' }
          ]
        },
        {
          userId: 'user01',
          password: 'password123',
          name: 'Sathish Kumar',
          role: 'General User',
          records: [
            { title: 'Monthly Allocation Report', date: '2026-05-12', status: 'Approved' },
            { title: 'Asset Verification Form', date: '2026-05-19', status: 'Pending' }
          ]
        }
      ]);
      console.log('🚀 Dummy database data initialized successfully.');
    }
  } catch (err) {
    console.error('Data seeding failed:', err);
  }
}
seedDatabase();


app.use('/api/auth', authRoutes);    
app.use('/api/users', recordRoutes); 
app.use('/api/admin', userRoutes);  

app.get('/', (req, res) => {
  res.send("API Running");
});

// Start server
app.listen(4000, () => {
  console.log("Server running on port 4000");
});
