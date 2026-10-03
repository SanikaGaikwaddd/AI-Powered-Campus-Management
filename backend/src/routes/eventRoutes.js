const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
    getEvents,
    getEventById
} = require("../controllers/eventController");

const router = express.Router();

// Get all events
router.get(
    "/",
    authMiddleware,
    getEvents
);

// Get one event
router.get(
    "/:id",
    authMiddleware,
    getEventById
);

module.exports = router;