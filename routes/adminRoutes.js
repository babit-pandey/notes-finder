const express = require("express");
const adminControllers = require("../controllers/adminControllers");

const router = express.Router();

router.get("/", adminControllers.admin_index);

router.get("/grades", adminControllers.admin_grades);

router.post("/update/", adminControllers.update_grades);

router.post("/delete/", adminControllers.delete_grades);

router.post("/add/", adminControllers.add_grades);

module.exports = router;
