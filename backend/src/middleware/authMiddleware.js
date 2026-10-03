const jwt = require("jsonwebtoken");
const env = require("../config/env");
const { sendError } = require("../utils/response");

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return sendError(
                res,
                "Authentication token is required",
                401
            );
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, env.jwtSecret);

        req.user = decoded;

        next();
    } catch (error) {
        return sendError(
            res,
            "Invalid or expired authentication token",
            401
        );
    }
};

module.exports = authMiddleware;