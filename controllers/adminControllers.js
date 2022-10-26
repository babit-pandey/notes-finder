const Grade = require("../models/grade");

const admin_index = async (req, res) => {
  res.render("admin", { pageName: "dashboard" });
};

const admin_grades = async (req, res) => {
  const grades = await Grade.find({});
  res.render("admin/grades", { grades, pageName: "grades" });
};

const delete_grades = async (req, res) => {
  if (!req.body.id) {
    res.status(400).send("Bad request");
  }

  try {
    await Grade.deleteOne({ _id: req.body.id });

    res.redirect("/admin/grades");
  } catch (err) {
    res.status(500).send(err);
  }
};

const update_grades = async (req, res) => {
  if (!req.body.id && !req.body.name) {
    res.status(400).send("Bad request");
  }

  try {
    await Grade.updateOne({ _id: req.body.id }, { name: req.body.name });

    res.redirect("/admin/grades");
  } catch (err) {
    res.status(500).send(err);
  }
};

const add_grades = async (req, res) => {
  if (!req.body.name) {
    res.status(400).send("Bad request");
  }

  try {
    await Grade.create({ name: req.body.name });

    res.redirect("/admin/grades");
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  admin_index,
  admin_grades,
  update_grades,
  delete_grades,
  add_grades,
};
