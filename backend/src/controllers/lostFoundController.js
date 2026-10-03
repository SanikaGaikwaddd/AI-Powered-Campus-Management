const { sendSuccess, sendError } = require("../utils/response");

// Get all lost and found items
const getLostFoundItems = async (req, res) => {
    try {
        // Temporary data
        // Later this will come from the database.
        const items = [
            {
                id: 1,
                title: "Black Wallet",
                description: "Black leather wallet found near the library.",
                type: "Found",
                category: "Personal Item",
                location: "Library",
                date: "2026-10-01",
                status: "Available",
                reportedBy: req.user.id
            },
            {
                id: 2,
                title: "HP Laptop Charger",
                description: "Laptop charger found in Computer Lab 2.",
                type: "Found",
                category: "Electronics",
                location: "Computer Lab 2",
                date: "2026-09-29",
                status: "Available",
                reportedBy: req.user.id
            },
            {
                id: 3,
                title: "Blue Backpack",
                description: "Blue backpack lost near the cafeteria.",
                type: "Lost",
                category: "Bag",
                location: "Cafeteria",
                date: "2026-09-27",
                status: "Searching",
                reportedBy: req.user.id
            }
        ];

        return sendSuccess(
            res,
            "Lost and found items fetched successfully",
            items
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch lost and found items",
            500
        );
    }
};


// Create a lost/found item
const createLostFoundItem = async (req, res) => {
    try {
        const {
            title,
            description,
            type,
            category,
            location
        } = req.body;

        if (
            !title ||
            !description ||
            !type ||
            !category ||
            !location
        ) {
            return sendError(
                res,
                "Title, description, type, category and location are required",
                400
            );
        }

        if (!["Lost", "Found"].includes(type)) {
            return sendError(
                res,
                "Type must be either Lost or Found",
                400
            );
        }

        // Temporary response
        // Later this item will be saved in the database.
        const item = {
            id: Date.now(),
            title,
            description,
            type,
            category,
            location,
            date: new Date().toISOString(),
            status: type === "Lost" ? "Searching" : "Available",
            reportedBy: req.user.id
        };

        return sendSuccess(
            res,
            "Lost and found item reported successfully",
            item,
            201
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to report lost and found item",
            500
        );
    }
};


// Get one lost/found item
const getLostFoundItemById = async (req, res) => {
    try {
        const { id } = req.params;

        // Temporary data
        const items = [
            {
                id: 1,
                title: "Black Wallet",
                description: "Black leather wallet found near the library.",
                type: "Found",
                category: "Personal Item",
                location: "Library",
                date: "2026-10-01",
                status: "Available",
                reportedBy: req.user.id
            },
            {
                id: 2,
                title: "HP Laptop Charger",
                description: "Laptop charger found in Computer Lab 2.",
                type: "Found",
                category: "Electronics",
                location: "Computer Lab 2",
                date: "2026-09-29",
                status: "Available",
                reportedBy: req.user.id
            },
            {
                id: 3,
                title: "Blue Backpack",
                description: "Blue backpack lost near the cafeteria.",
                type: "Lost",
                category: "Bag",
                location: "Cafeteria",
                date: "2026-09-27",
                status: "Searching",
                reportedBy: req.user.id
            }
        ];

        const item = items.find(
            (item) => item.id === Number(id)
        );

        if (!item) {
            return sendError(
                res,
                "Lost and found item not found",
                404
            );
        }

        return sendSuccess(
            res,
            "Lost and found item fetched successfully",
            item
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch lost and found item",
            500
        );
    }
};


module.exports = {
    getLostFoundItems,
    createLostFoundItem,
    getLostFoundItemById
};