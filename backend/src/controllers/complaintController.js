const { sendSuccess, sendError } = require("../utils/response");

// Get all complaints
const getComplaints = async (req, res) => {
    try {
        // Temporary data
        // Later this will come from the database.
        const complaints = [
            {
                id: 1,
                title: "Classroom projector not working",
                description: "The projector in Room 101 is not working.",
                category: "Infrastructure",
                status: "Pending",
                submittedBy: req.user.id,
                createdAt: "2026-10-01"
            },
            {
                id: 2,
                title: "Wi-Fi connectivity issue",
                description: "Internet connectivity is very slow in the library.",
                category: "IT",
                status: "In Progress",
                submittedBy: req.user.id,
                createdAt: "2026-09-28"
            }
        ];

        return sendSuccess(
            res,
            "Complaints fetched successfully",
            complaints
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch complaints",
            500
        );
    }
};


// Create a new complaint
const createComplaint = async (req, res) => {
    try {
        const {
            title,
            description,
            category
        } = req.body;

        if (!title || !description || !category) {
            return sendError(
                res,
                "Title, description and category are required",
                400
            );
        }

        // Temporary response
        // Later this complaint will be saved in the database.
        const complaint = {
            id: Date.now(),
            title,
            description,
            category,
            status: "Pending",
            submittedBy: req.user.id,
            createdAt: new Date().toISOString()
        };

        return sendSuccess(
            res,
            "Complaint submitted successfully",
            complaint,
            201
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to submit complaint",
            500
        );
    }
};


// Get one complaint
const getComplaintById = async (req, res) => {
    try {
        const { id } = req.params;

        // Temporary data
        const complaints = [
            {
                id: 1,
                title: "Classroom projector not working",
                description: "The projector in Room 101 is not working.",
                category: "Infrastructure",
                status: "Pending",
                submittedBy: req.user.id,
                createdAt: "2026-10-01"
            },
            {
                id: 2,
                title: "Wi-Fi connectivity issue",
                description: "Internet connectivity is very slow in the library.",
                category: "IT",
                status: "In Progress",
                submittedBy: req.user.id,
                createdAt: "2026-09-28"
            }
        ];

        const complaint = complaints.find(
            (complaint) => complaint.id === Number(id)
        );

        if (!complaint) {
            return sendError(
                res,
                "Complaint not found",
                404
            );
        }

        return sendSuccess(
            res,
            "Complaint fetched successfully",
            complaint
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch complaint",
            500
        );
    }
};


module.exports = {
    getComplaints,
    createComplaint,
    getComplaintById
};