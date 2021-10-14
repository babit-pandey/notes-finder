const Grade = require("../models/grade");

const notes_index = async (req, res) => {
  const grades = await Grade.find({});
  res.render("notes/index", { grades });
};

const grades = async (req, res) => {
  const grades = await Grade.find({});
  res.render("notes/grades", { grades });
};

const grade = async (req, res) => {
  const grades = await Grade.find({});
  const grade = await Grade.findOne({ name: req.params.name });
  res.render("notes/grade", { grades, grade });
};

module.exports = {
  notes_index,
  grades,
  grade,
};
