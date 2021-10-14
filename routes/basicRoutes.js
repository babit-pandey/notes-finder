const express = require("express");
const basicControllers = require("../controllers/basicControllers");

const router = express.Router();

router.get("/", basicControllers.notes_index);

module.exports = router;
