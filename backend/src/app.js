const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const env = require("./config/env");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const timetableRoutes = require("./routes/timetableRoutes");
const placementRoutes = require("./routes/placementRoutes");
const eventRoutes = require("./routes/eventRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const lostFoundRoutes = require("./routes/lostFoundRoutes");
const documentRoutes = require("./routes/documentRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// --------------------
// Middleware
// --------------------

app.use(
    cors({
        origin: env.clientUrl,
        credentials: true
    })
);

app.use(express.json());

app.use(cookieParser());

// --------------------
// API Routes
// --------------------

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/lost-found", lostFoundRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/notifications", notificationRoutes);

// --------------------
// Test Route
// --------------------

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CampusAI Backend API is running"
    });
});

// --------------------
// 404 Handler
// --------------------

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// --------------------
// Global Error Handler
// --------------------

app.use(errorMiddleware);

module.exports = app;