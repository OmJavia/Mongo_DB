const express = require('express');
const router = require('./Routes/Route');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/pickandwin", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to pickandwin database");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit the process if DB connection fails
    }
};

// Connect to the database
connectDB();

// Middleware to use the router
app.use('/', router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
