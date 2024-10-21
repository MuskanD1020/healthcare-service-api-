const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const serviceRoutes = require('c:/healthcare-service-api/routes/serviceRoutes');
const connectDB = require('c:/healthcare-service-api/config/db');

dotenv.config()

connectDB();

const app = express();
// Middleware
app.use(bodyParser.json());
// Routes
app.use('/api', serviceRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
