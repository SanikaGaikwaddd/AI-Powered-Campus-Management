const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        role: {
            type: String,
            enum: ["Student", "Faculty", "Admin"],
            default: "Student"
        },

        phone: {
            type: String,
            default: ""
        },

        profileImage: {
            type: String,
            default: ""
        },

        department: {
            type: String,
            default: ""
        },

        course: {
            type: String,
            default: ""
        },

        year: {
            type: Number,
            default: null
        },

        rollNumber: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;