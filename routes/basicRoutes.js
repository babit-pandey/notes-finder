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

// @route  GET /grades/:name
// @desc   Single Grade Page
// @access Public
router.get("/grades/:name", basicControllers.grade);

// @route  GET /about
// @desc   About Page
// @access Public
router.get("/about", basicControllers.about);

// @route  GET /contact
// @desc   Contact Page
// @access Public
router.get("/contact", basicControllers.contact);

// @route  GET /support
// @desc   Support Page
// @access Public
router.get("/support", basicControllers.support);

module.exports = router;
