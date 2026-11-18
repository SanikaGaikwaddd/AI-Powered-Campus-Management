const env = require("../config/env");

// Sends the question to the Python RAG service
const getAIResponse = async (question, role) => {
    if (!question || typeof question !== "string") {
        throw new Error("Question is required");
    }

    const response = await fetch(`${env.aiServiceUrl}/rag/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, role })
    });

    if (!response.ok) {
        throw new Error("AI service error");
    }

    return response.json();
};

// Still a placeholder (Resume Analyzer comes later)
const analyzeResume = async (resumeText) => {
    if (!resumeText || typeof resumeText !== "string") {
        throw new Error("Resume text is required");
    }

    return {
        score: 0,
        skills: [],
        suggestions: ["Resume analysis service will be connected later."],
        source: "temporary"
    };
};

module.exports = {
    getAIResponse,
    analyzeResume
};