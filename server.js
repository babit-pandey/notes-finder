require('dotenv').config()
const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Connect Database
connectDB();

// Middleware Functions View Engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Define Routes
app.use("/", require("./routes/basicRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
