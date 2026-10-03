const { sendSuccess, sendError } = require("../utils/response");

// Get timetable for the logged-in student
const getTimetable = async (req, res) => {
    try {
        // Temporary timetable data
        // Later this will come from the database.
        const timetable = [
            {
                day: "Monday",
                classes: [
                    {
                        subject: "Data Structures",
                        startTime: "09:00",
                        endTime: "10:00",
                        room: "Room 101",
                        faculty: "Dr. Sharma"
                    },
                    {
                        subject: "Database Management System",
                        startTime: "11:00",
                        endTime: "12:00",
                        room: "Room 203",
                        faculty: "Prof. Patil"
                    }
                ]
            },
            {
                day: "Tuesday",
                classes: [
                    {
                        subject: "Operating Systems",
                        startTime: "10:00",
                        endTime: "11:00",
                        room: "Room 105",
                        faculty: "Dr. Joshi"
                    },
                    {
                        subject: "Computer Networks",
                        startTime: "13:00",
                        endTime: "14:00",
                        room: "Lab 2",
                        faculty: "Prof. Kulkarni"
                    }
                ]
            },
            {
                day: "Wednesday",
                classes: [
                    {
                        subject: "Machine Learning",
                        startTime: "09:00",
                        endTime: "10:00",
                        room: "AI Lab",
                        faculty: "Dr. Mehta"
                    }
                ]
            },
            {
                day: "Thursday",
                classes: [
                    {
                        subject: "Web Technologies",
                        startTime: "11:00",
                        endTime: "12:00",
                        room: "Lab 1",
                        faculty: "Prof. Shah"
                    }
                ]
            },
            {
                day: "Friday",
                classes: [
                    {
                        subject: "Software Engineering",
                        startTime: "10:00",
                        endTime: "11:00",
                        room: "Room 202",
                        faculty: "Dr. Deshmukh"
                    }
                ]
            }
        ];

        return sendSuccess(
            res,
            "Timetable fetched successfully",
            timetable
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch timetable",
            500
        );
    }
};

module.exports = {
    getTimetable
};