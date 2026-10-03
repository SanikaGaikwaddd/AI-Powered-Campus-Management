const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        type: {
            type: String,
            enum: [
                "Marksheet",
                "ID Card",
                "Certificate",
                "Resume",
                "Other"
            ],
            default: "Other"
        },

        fileName: {
            type: String,
            required: true
        },

        originalName: {
            type: String,
            default: ""
        },

        filePath: {
            type: String,
            required: true
        },

        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        status: {
            type: String,
            enum: ["Available", "Deleted"],
            default: "Available"
        }
    },
    {
        timestamps: true
    }
);

const Document = mongoose.model(
    "Document",
    documentSchema
);

module.exports = Document;