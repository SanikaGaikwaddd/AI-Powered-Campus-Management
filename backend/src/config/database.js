const mongoose = require("mongoose");
const env = require("./env");

const connectDatabase = async () => {
    if (!env.mongodbUri) {
        throw new Error(
            "MONGODB_URI is not configured in the .env file"
        );
    }

    try {
        await mongoose.connect(env.mongodbUri);

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error(
            "MongoDB connection failed:",
            error.message
        );

        throw error;
    }
};

module.exports = connectDatabase;