const { sendSuccess, sendError } = require("../utils/response");

// Get notifications for the logged-in user
const getNotifications = async (req, res) => {
    try {
        // Temporary data
        // Later this will come from the database.
        const notifications = [
            {
                id: 1,
                title: "New Placement Drive",
                message: "A new placement opportunity has been added.",
                type: "Placement",
                isRead: false,
                createdAt: "2026-10-01"
            },
            {
                id: 2,
                title: "Event Registration",
                message: "Registration for Hackathon 2026 is now open.",
                type: "Event",
                isRead: true,
                createdAt: "2026-09-30"
            },
            {
                id: 3,
                title: "Attendance Reminder",
                message: "Your attendance is below the recommended level.",
                type: "Attendance",
                isRead: false,
                createdAt: "2026-09-28"
            }
        ];

        return sendSuccess(
            res,
            "Notifications fetched successfully",
            notifications
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch notifications",
            500
        );
    }
};


// Mark a notification as read
const markNotificationAsRead = async (req, res) => {
    try {
        const { id } = req.params;

        // Temporary response
        // Later this will update the notification in the database.
        const notification = {
            id: Number(id),
            isRead: true
        };

        return sendSuccess(
            res,
            "Notification marked as read",
            notification
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to update notification",
            500
        );
    }
};


module.exports = {
    getNotifications,
    markNotificationAsRead
};