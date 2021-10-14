const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
  name: { type: String, maxlength: 50, required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
});

module.exports = mongoose.model("Grade", gradeSchema);
