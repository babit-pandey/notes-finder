const Grade = require("../models/grade");

const admin_index = async (req, res) => {
  res.render("admin", { pageName: "dashboard" });
};

const admin_grades = async (req, res) => {
  const grades = await Grade.find({});
  res.render("admin/grades", { grades, pageName: "grades" });
};

const delete_grades = (req, res) => {
  if (!req.body.id) {
    res.status(400).send("Bad request");
  }

  Grade.findByIdAndDelete(req.body.id, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect('/admin/grades');
    }
  });
};

const update_grades = (req, res) => {
  if (!req.body.id && !req.body.name) {
    res.status(400).send("Bad request");
  }

  Grade.findByIdAndUpdate(req.body.id, { name: req.body.name }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect("/admin/grades");
    }
  });
};

const add_grades = (req, res) => {
  if (!req.body.name) {
    res.status(400).send("Bad request");
  }

  Grade.create({ name: req.body.name }, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.redirect("/admin/grades");
    }
  })
}

module.exports = {
  admin_index,
  admin_grades,
  update_grades,
  delete_grades,
  add_grades
};
