const dotenv = require("dotenv");

dotenv.config();

const env = {
    port: process.env.PORT || 5000,

    jwtSecret: process.env.JWT_SECRET,

    clientUrl:
        process.env.CLIENT_URL ||
        "http://localhost:5173",

    mongodbUri: process.env.MONGODB_URI
};

module.exports = env;