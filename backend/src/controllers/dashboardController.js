const authService = require("../services/authService");
const { sendSuccess, sendError } = require("../utils/response");

const getDashboard = async (req, res) => {
    try {
        const users = authService.getUsers();

        const currentUser = users.find(
            (user) => user.id === req.user.id
        );

        if (!currentUser) {
            return sendError(
                res,
                "User not found",
                404
            );
        }

        const dashboardData = {
            user: currentUser,
            summary: {
                attendance: {
                    percentage: 0,
                    present: 0,
                    total: 0
                },
                upcomingClasses: 0,
                upcomingEvents: 0,
                activePlacementDrives: 0,
                pendingComplaints: 0,
                notifications: 0
            }
        };

        return sendSuccess(
            res,
            "Dashboard data fetched successfully",
            dashboardData
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch dashboard data",
            500
        );
    }
};

module.exports = {
    getDashboard
};