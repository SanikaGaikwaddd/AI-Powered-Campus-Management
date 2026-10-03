const mongoose = require("mongoose");

const lostFoundItemSchema = new mongoose.Schema(
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

        type: {
            type: String,
            enum: ["Lost", "Found"],
            required: true
        },

        category: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        date: {
            type: Date,
            default: Date.now
        },

        status: {
            type: String,
            enum: ["Searching", "Available", "Claimed", "Resolved"],
            default: "Available"
        },

        reportedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        image: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const LostFoundItem = mongoose.model(
    "LostFoundItem",
    lostFoundItemSchema
);

module.exports = LostFoundItem;