const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
    getLostFoundItems,
    createLostFoundItem,
    getLostFoundItemById
} = require("../controllers/lostFoundController");

const router = express.Router();

// Get all lost and found items
router.get(
    "/",
    authMiddleware,
    getLostFoundItems
);

// Report a lost or found item
router.post(
    "/",
    authMiddleware,
    createLostFoundItem
);

// Get one item
router.get(
    "/:id",
    authMiddleware,
    getLostFoundItemById
);

module.exports = router;