const { sendSuccess, sendError } = require("../utils/response");

// Get all campus events
const getEvents = async (req, res) => {
    try {
        // Temporary data
        // Later this will come from the database.
        const events = [
            {
                id: 1,
                title: "Hackathon 2026",
                description: "24-hour coding and innovation challenge.",
                date: "2026-10-12",
                time: "09:00",
                location: "Main Auditorium",
                category: "Technical",
                organizer: "Computer Science Department",
                seats: 100,
                registered: 65
            },
            {
                id: 2,
                title: "AI & Machine Learning Workshop",
                description: "Hands-on workshop covering modern AI and ML concepts.",
                date: "2026-10-18",
                time: "10:00",
                location: "AI Lab",
                category: "Workshop",
                organizer: "AI Club",
                seats: 60,
                registered: 42
            },
            {
                id: 3,
                title: "Annual Sports Meet",
                description: "Inter-department sports competition.",
                date: "2026-11-05",
                time: "08:00",
                location: "University Ground",
                category: "Sports",
                organizer: "Sports Department",
                seats: 200,
                registered: 120
            }
        ];

        return sendSuccess(
            res,
            "Events fetched successfully",
            events
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch events",
            500
        );
    }
};

// Get a single event
const getEventById = async (req, res) => {
    try {
        const { id } = req.params;

        const events = [
            {
                id: 1,
                title: "Hackathon 2026",
                description: "24-hour coding and innovation challenge.",
                date: "2026-10-12",
                time: "09:00",
                location: "Main Auditorium",
                category: "Technical",
                organizer: "Computer Science Department",
                seats: 100,
                registered: 65
            },
            {
                id: 2,
                title: "AI & Machine Learning Workshop",
                description: "Hands-on workshop covering modern AI and ML concepts.",
                date: "2026-10-18",
                time: "10:00",
                location: "AI Lab",
                category: "Workshop",
                organizer: "AI Club",
                seats: 60,
                registered: 42
            },
            {
                id: 3,
                title: "Annual Sports Meet",
                description: "Inter-department sports competition.",
                date: "2026-11-05",
                time: "08:00",
                location: "University Ground",
                category: "Sports",
                organizer: "Sports Department",
                seats: 200,
                registered: 120
            }
        ];

        const event = events.find(
            (event) => event.id === Number(id)
        );

        if (!event) {
            return sendError(
                res,
                "Event not found",
                404
            );
        }

        return sendSuccess(
            res,
            "Event fetched successfully",
            event
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch event",
            500
        );
    }
};

module.exports = {
    getEvents,
    getEventById
};