const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema(
    {
        day: {
            type: String,
            required: true,
            enum: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ]
        },

        subject: {
            type: String,
            required: true,
            trim: true
        },

        faculty: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        startTime: {
            type: String,
            required: true
        },

        endTime: {
            type: String,
            required: true
        },

        room: {
            type: String,
            required: true,
            trim: true
        },

        semester: {
            type: String,
            default: ""
        },

        division: {
            type: String,
            default: ""
        },

        academicYear: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const Timetable = mongoose.model(
    "Timetable",
    timetableSchema
);

module.exports = Timetable;