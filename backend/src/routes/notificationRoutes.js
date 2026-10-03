const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
    getNotifications,
    markNotificationAsRead
} = require("../controllers/notificationController");

const router = express.Router();

// Get notifications
router.get(
    "/",
    authMiddleware,
    getNotifications
);

// Mark notification as read
router.patch(
    "/:id/read",
    authMiddleware,
    markNotificationAsRead
);

module.exports = router;