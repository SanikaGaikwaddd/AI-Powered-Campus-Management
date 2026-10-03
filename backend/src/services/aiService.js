// Temporary AI service
// Later this service will communicate with the Python AI service.

const getAIResponse = async (question) => {
    if (!question || typeof question !== "string") {
        throw new Error("Question is required");
    }

    // Temporary response
    // Later this will be replaced with a call
    // to the Python AI service.

    return {
        question,
        answer:
            "This is a temporary AI response. The Python AI service will be connected later.",
        source: "temporary"
    };
};


const analyzeResume = async (resumeText) => {
    if (!resumeText || typeof resumeText !== "string") {
        throw new Error("Resume text is required");
    }

    // Temporary response
    // Later this will send the resume to
    // the Python resume analyzer.

    return {
        score: 0,
        skills: [],
        suggestions: [
            "Resume analysis service will be connected later."
        ],
        source: "temporary"
    };
};


module.exports = {
    getAIResponse,
    analyzeResume
};