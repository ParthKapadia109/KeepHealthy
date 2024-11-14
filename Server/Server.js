const express = require("express");
const connectDB = require("./Config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require('./Routes/auth');
const cors = require('cors')
const paymentRoutes = require('./Routes/payment');

dotenv.config();
const app = express();
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors)
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/auth", require("./Routes/auth"));
app.use("/api/products", require("./Routes/product"));
app.use('/api', authRoutes);
app.use('/api/payment', paymentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
