const express = require('express');
const morgan = require('morgan');
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

// Middleware For Reading Requests From Body
app.use(express.json());

app.use(morgan('combined'));

app.use('/api/bounties', require('./routes/bountyRouter'));


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

connectToMongoDB();


// Starts The Server
app.listen(9000, () => {
    console.log('Server Listening on Port 9000')
});
