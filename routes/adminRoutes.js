const express = require("express");
const adminControllers = require("../controllers/adminControllers");

const router = express.Router();

// @route  GET admin/
// @desc   Admin Panel Dashboard
// @access Administrator
router.get("/", adminControllers.admin_index);

// @route  GET admin/grades
// @desc   List of Grades
// @access Administrator
router.get("/grades", adminControllers.admin_grades);

// @route  POST admin/update
// @desc   Update Grades
// @access Administrator
router.post("/update/", adminControllers.update_grades);

// @route  POST admin/delete
// @desc   Delete Grades
// @access Administrator
router.post("/delete/", adminControllers.delete_grades);

// @route  POST admin/add
// @desc   Add Grades
// @access Administrator
router.post("/add/", adminControllers.add_grades);

module.exports = router;
