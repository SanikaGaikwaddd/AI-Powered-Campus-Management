const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        category: {
            type: String,
            enum: [
                "Infrastructure",
                "IT",
                "Academic",
                "Hostel",
                "Library",
                "Other"
            ],
            default: "Other"
        },

        status: {
            type: String,
            enum: [
                "Pending",
                "In Progress",
                "Resolved",
                "Rejected"
            ],
            default: "Pending"
        },

        submittedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        resolution: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const Complaint = mongoose.model(
    "Complaint",
    complaintSchema
);

module.exports = Complaint;