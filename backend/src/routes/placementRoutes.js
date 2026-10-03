const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
    getPlacementDrives,
    getPlacementDriveById
} = require("../controllers/placementController");

const router = express.Router();

// Get all placement drives
router.get(
    "/",
    authMiddleware,
    getPlacementDrives
);

// Get one placement drive
router.get(
    "/:id",
    authMiddleware,
    getPlacementDriveById
);

module.exports = router;