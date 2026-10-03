const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
    getDocuments,
    uploadDocument,
    getDocumentById
} = require("../controllers/documentController");

const router = express.Router();

// Get all documents
router.get(
    "/",
    authMiddleware,
    getDocuments
);

// Upload a document
router.post(
    "/upload",
    authMiddleware,
    upload.single("document"),
    uploadDocument
);

// Get one document
router.get(
    "/:id",
    authMiddleware,
    getDocumentById
);

module.exports = router;