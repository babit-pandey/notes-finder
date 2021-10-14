const express = require("express");
const mongoose = require("mongoose");
const basicRoutes = require("./routes/basicRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

mongoose
  .connect("mongodb://localhost/notesfinder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to Mongodb database"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);

app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use("/", basicRoutes);
app.use("/admin", adminRoutes);

app.use(express.static("public"));

app.listen(port, () => console.log(`Server running on port ${port}`));
