const { sendSuccess, sendError } = require("../utils/response");

// Get all available placement drives
const getPlacementDrives = async (req, res) => {
    try {
        // Temporary data
        // Later this will come from the database.
        const placementDrives = [
            {
                id: 1,
                company: "TCS",
                role: "Software Engineer",
                package: "7 LPA",
                location: "Pune",
                deadline: "2026-10-15",
                eligibility: {
                    minimumCGPA: 7.0,
                    branches: ["CSE", "IT", "AI/ML"]
                },
                status: "Open"
            },
            {
                id: 2,
                company: "Infosys",
                role: "System Engineer",
                package: "6.5 LPA",
                location: "Bangalore",
                deadline: "2026-10-20",
                eligibility: {
                    minimumCGPA: 6.5,
                    branches: ["CSE", "IT"]
                },
                status: "Open"
            },
            {
                id: 3,
                company: "Tech Mahindra",
                role: "Graduate Engineer Trainee",
                package: "5.5 LPA",
                location: "Hyderabad",
                deadline: "2026-10-25",
                eligibility: {
                    minimumCGPA: 6.0,
                    branches: ["CSE", "IT", "ECE"]
                },
                status: "Open"
            }
        ];

        return sendSuccess(
            res,
            "Placement drives fetched successfully",
            placementDrives
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch placement drives",
            500
        );
    }
};

// Get a single placement drive
const getPlacementDriveById = async (req, res) => {
    try {
        const { id } = req.params;

        const placementDrives = [
            {
                id: 1,
                company: "TCS",
                role: "Software Engineer",
                package: "7 LPA",
                location: "Pune",
                deadline: "2026-10-15",
                eligibility: {
                    minimumCGPA: 7.0,
                    branches: ["CSE", "IT", "AI/ML"]
                },
                status: "Open"
            },
            {
                id: 2,
                company: "Infosys",
                role: "System Engineer",
                package: "6.5 LPA",
                location: "Bangalore",
                deadline: "2026-10-20",
                eligibility: {
                    minimumCGPA: 6.5,
                    branches: ["CSE", "IT"]
                },
                status: "Open"
            },
            {
                id: 3,
                company: "Tech Mahindra",
                role: "Graduate Engineer Trainee",
                package: "5.5 LPA",
                location: "Hyderabad",
                deadline: "2026-10-25",
                eligibility: {
                    minimumCGPA: 6.0,
                    branches: ["CSE", "IT", "ECE"]
                },
                status: "Open"
            }
        ];

        const placementDrive = placementDrives.find(
            (drive) => drive.id === Number(id)
        );

        if (!placementDrive) {
            return sendError(
                res,
                "Placement drive not found",
                404
            );
        }

        return sendSuccess(
            res,
            "Placement drive fetched successfully",
            placementDrive
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch placement drive",
            500
        );
    }
};

module.exports = {
    getPlacementDrives,
    getPlacementDriveById
};