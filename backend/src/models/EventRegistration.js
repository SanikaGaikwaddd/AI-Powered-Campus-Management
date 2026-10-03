const mongoose = require("mongoose");

const eventRegistrationSchema = new mongoose.Schema(
    {
        event: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
            required: true
        },

        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        registrationStatus: {
            type: String,
            enum: ["Registered", "Cancelled", "Attended"],
            default: "Registered"
        },

        registeredAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

const EventRegistration = mongoose.model(
    "EventRegistration",
    eventRegistrationSchema
);

module.exports = EventRegistration;