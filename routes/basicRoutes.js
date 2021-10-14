const express = require("express");
const basicControllers = require("../controllers/basicControllers");

const router = express.Router();

// @route  GET /
// @desc   HomePage
// @access Public
router.get("/", basicControllers.notes_index);

// @route  GET /grades
// @desc   Grades Page
// @access Public
router.get("/grades", basicControllers.grades);

module.exports = router;
