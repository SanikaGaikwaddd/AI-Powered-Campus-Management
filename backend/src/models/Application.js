const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        placementDrive: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PlacementDrive",
            required: true
        },

        status: {
            type: String,
            enum: [
                "Applied",
                "Shortlisted",
                "Rejected",
                "Selected"
            ],
            default: "Applied"
        },

        resume: {
            type: String,
            default: ""
        },

        appliedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

const Application = mongoose.model(
    "Application",
    applicationSchema
);

module.exports = Application;