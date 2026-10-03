const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        subject: {
            type: String,
            required: true,
            trim: true
        },

        totalClasses: {
            type: Number,
            default: 0
        },

        attendedClasses: {
            type: Number,
            default: 0
        },

        percentage: {
            type: Number,
            default: 0
        },

        semester: {
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

const Attendance = mongoose.model(
    "Attendance",
    attendanceSchema
);

module.exports = Attendance;