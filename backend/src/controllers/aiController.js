const { getAIResponse } = require("../services/aiService");
const { sendSuccess, sendError } = require("../utils/response");

const askAI = async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return sendError(res, "Question is required", 400);
        }

        // Role comes from the JWT token, never from the request body
        const data = await getAIResponse(question, req.user.role);

        return sendSuccess(res, "Answer generated successfully", data);
    } catch (error) {
        return sendError(res, "AI service is unavailable", 502);
    }
};

module.exports = { askAI };