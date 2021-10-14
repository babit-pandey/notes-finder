const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, maxlength: 50, required: true },
  email:  { type: String, maxlength: 200, required: true },
  isAdmin: {type: Boolean, default: false},
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
