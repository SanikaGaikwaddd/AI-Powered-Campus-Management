const { sendSuccess, sendError } = require("../utils/response");

// Get attendance of logged-in student
const getAttendance = async (req, res) => {
    try {
        // Temporary attendance data
        // Later this will come from the database.
        const attendance = [
            {
                subject: "Data Structures",
                totalClasses: 40,
                attendedClasses: 36,
                percentage: 90
            },
            {
                subject: "Database Management System",
                totalClasses: 35,
                attendedClasses: 30,
                percentage: 85.71
            },
            {
                subject: "Operating Systems",
                totalClasses: 38,
                attendedClasses: 32,
                percentage: 84.21
            },
            {
                subject: "Computer Networks",
                totalClasses: 30,
                attendedClasses: 27,
                percentage: 90
            }
        ];

        const totalClasses = attendance.reduce(
            (total, subject) => total + subject.totalClasses,
            0
        );

        const attendedClasses = attendance.reduce(
            (total, subject) => total + subject.attendedClasses,
            0
        );

        const overallPercentage =
            totalClasses > 0
                ? Number(
                      ((attendedClasses / totalClasses) * 100).toFixed(2)
                  )
                : 0;

        return sendSuccess(
            res,
            "Attendance fetched successfully",
            {
                overallPercentage,
                subjects: attendance
            }
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch attendance",
            500
        );
    }
};

module.exports = {
    getAttendance
};