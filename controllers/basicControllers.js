const Grade = require("../models/grade");

const notes_index = async (req, res) => {
  const grades = await Grade.find({});
  res.render("notes/index", { grades });
};

module.exports = {
  notes_index,
};
