const authService = require("../services/authService");
const { sendSuccess, sendError } = require("../utils/response");

// Get current logged-in user's profile
const getProfile = async (req, res) => {
    try {
        const users = authService.getUsers();

        const user = users.find(
            (user) => user.id === req.user.id
        );

        if (!user) {
            return sendError(
                res,
                "User not found",
                404
            );
        }

        return sendSuccess(
            res,
            "Profile fetched successfully",
            user
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch profile",
            500
        );
    }
};

module.exports = {
    getProfile
};