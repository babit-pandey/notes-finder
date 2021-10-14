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

const about = async (req, res) => {
  const grades = await Grade.find({});
  res.render("notes/about", { grades });
};

const contact = async (req, res) => {
  const grades = await Grade.find({});
  res.render("notes/contact", { grades });
};

const support = async (req, res) => {
  const grades = await Grade.find({});
  res.render("notes/support", { grades });
};

module.exports = {
  notes_index,
  grades,
  grade,
  about,
  contact,
  support
};
