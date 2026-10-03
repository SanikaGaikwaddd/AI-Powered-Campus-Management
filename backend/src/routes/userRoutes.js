const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const {
    getProfile
} = require("../controllers/userController");

const router = express.Router();

// Get logged-in user's profile
router.get(
    "/profile",
    authMiddleware,
    getProfile
);

module.exports = router;