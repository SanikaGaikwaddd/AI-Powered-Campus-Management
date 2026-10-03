const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
    getDashboard
} = require("../controllers/dashboardController");

const router = express.Router();

// Get dashboard data for logged-in user
router.get(
    "/",
    authMiddleware,
    getDashboard
);

module.exports = router;