const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
    getAttendance
} = require("../controllers/attendanceController");

const router = express.Router();

// Get attendance of logged-in student
router.get(
    "/",
    authMiddleware,
    getAttendance
);

module.exports = router;