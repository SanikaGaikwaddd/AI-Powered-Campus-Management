const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
    getTimetable
} = require("../controllers/timetableController");

const router = express.Router();

// Get timetable for logged-in user
router.get(
    "/",
    authMiddleware,
    getTimetable
);

module.exports = router;