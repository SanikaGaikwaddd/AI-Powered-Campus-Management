const authService = require("../services/authService");
const {
    isValidEmail,
    isValidPassword,
    isRequired
} = require("../utils/validators");
const { sendSuccess, sendError } = require("../utils/response");

// Register
const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Validate required fields
        if (
            !isRequired(name) ||
            !isRequired(email) ||
            !isRequired(password)
        ) {
            return sendError(
                res,
                "Name, email and password are required",
                400
            );
        }

        // Validate email
        if (!isValidEmail(email)) {
            return sendError(
                res,
                "Please provide a valid email address",
                400
            );
        }

        // Validate password
        if (!isValidPassword(password)) {
            return sendError(
                res,
                "Password must contain at least 6 characters",
                400
            );
        }

        const result = await authService.registerUser({
            name,
            email,
            password,
            role
        });

        return sendSuccess(
            res,
            "Registration successful",
            result,
            201
        );
    } catch (error) {
        return sendError(
            res,
            error.message,
            400
        );
    }
};

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!isRequired(email) || !isRequired(password)) {
            return sendError(
                res,
                "Email and password are required",
                400
            );
        }

        if (!isValidEmail(email)) {
            return sendError(
                res,
                "Please provide a valid email address",
                400
            );
        }

        const result = await authService.loginUser(
            email,
            password
        );

        return sendSuccess(
            res,
            "Login successful",
            result
        );
    } catch (error) {
        return sendError(
            res,
            error.message,
            401
        );
    }
};

module.exports = {
    register,
    login
};