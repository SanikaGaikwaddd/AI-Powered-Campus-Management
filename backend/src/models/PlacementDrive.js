const mongoose = require("mongoose");

const placementDriveSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            required: true,
            trim: true
        },

        package: {
            type: String,
            required: true
        },

        location: {
            type: String,
            default: ""
        },

        deadline: {
            type: Date,
            required: true
        },

        eligibility: {
            minimumCGPA: {
                type: Number,
                default: 0
            },

            branches: {
                type: [String],
                default: []
            }
        },

        status: {
            type: String,
            enum: ["Open", "Closed"],
            default: "Open"
        },

        description: {
            type: String,
            default: ""
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

const PlacementDrive = mongoose.model(
    "PlacementDrive",
    placementDriveSchema
);

module.exports = PlacementDrive;