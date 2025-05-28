const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = 4000;
const profileRouter = require('./routes/profile');
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/exercises',require('./routes/exercises'));
app.use('/api/progress',require('./routes/progress'));
app.use('/api/profile',profileRouter);

app.get('/test', (req, res) => {
  res.send('🧪 Test route working');
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
});
