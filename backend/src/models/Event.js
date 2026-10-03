const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
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

        date: {
            type: Date,
            required: true
        },

        time: {
            type: String,
            required: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        category: {
            type: String,
            enum: [
                "Technical",
                "Workshop",
                "Sports",
                "Cultural",
                "Other"
            ],
            default: "Other"
        },

        organizer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        seats: {
            type: Number,
            default: 0
        },

        registered: {
            type: Number,
            default: 0
        },

        status: {
            type: String,
            enum: ["Upcoming", "Ongoing", "Completed", "Cancelled"],
            default: "Upcoming"
        }
    },
    {
        timestamps: true
    }
);

const Event = mongoose.model(
    "Event",
    eventSchema
);

module.exports = Event;