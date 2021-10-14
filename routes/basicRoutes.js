const express = require("express");
const basicControllers = require("../controllers/basicControllers");

const router = express.Router();

// @route  GET /
// @desc   HomePage
// @access Public
router.get("/", basicControllers.notes_index);

module.exports = router;
