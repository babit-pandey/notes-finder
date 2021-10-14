const express = require("express");
const basicRoutes = require("./routes/basicRoutes");
const adminRoutes = require("./routes/adminRoutes");
const connectDB = require("../MERN/devconnector/config/db");

const app = express();

// Connect Database
connectDB();

app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/", basicRoutes);
app.use("/admin", adminRoutes);

app.use(express.static("public"));

app.listen(port, () => console.log(`Server running on port ${port}`));
