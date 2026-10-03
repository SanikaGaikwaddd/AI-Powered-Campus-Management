const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
    getComplaints,
    createComplaint,
    getComplaintById
} = require("../controllers/complaintController");

const router = express.Router();

// Get all complaints
router.get(
    "/",
    authMiddleware,
    getComplaints
);

// Create a complaint
router.post(
    "/",
    authMiddleware,
    createComplaint
);

// Get one complaint
router.get(
    "/:id",
    authMiddleware,
    getComplaintById
);

module.exports = router;