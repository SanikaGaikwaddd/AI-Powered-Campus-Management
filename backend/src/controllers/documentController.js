const { sendSuccess, sendError } = require("../utils/response");

// Get all documents
const getDocuments = async (req, res) => {
    try {
        // Temporary data
        // Later this will come from the database.
        const documents = [
            {
                id: 1,
                name: "Semester 5 Marksheet",
                type: "Marksheet",
                fileName: "semester-5-marksheet.pdf",
                uploadedBy: req.user.id,
                uploadedAt: "2026-09-20",
                status: "Available"
            },
            {
                id: 2,
                name: "College ID Card",
                type: "ID Card",
                fileName: "college-id-card.pdf",
                uploadedBy: req.user.id,
                uploadedAt: "2026-09-15",
                status: "Available"
            }
        ];

        return sendSuccess(
            res,
            "Documents fetched successfully",
            documents
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch documents",
            500
        );
    }
};


// Upload a document
const uploadDocument = async (req, res) => {
    try {
        if (!req.file) {
            return sendError(
                res,
                "Please upload a document",
                400
            );
        }

        // Temporary document object
        // Later this information will be stored in the database.
        const document = {
            id: Date.now(),
            name: req.body.name || req.file.originalname,
            type: req.body.type || "Other",
            fileName: req.file.filename,
            originalName: req.file.originalname,
            filePath: req.file.path,
            uploadedBy: req.user.id,
            uploadedAt: new Date().toISOString(),
            status: "Available"
        };

        return sendSuccess(
            res,
            "Document uploaded successfully",
            document,
            201
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to upload document",
            500
        );
    }
};


// Get one document
const getDocumentById = async (req, res) => {
    try {
        const { id } = req.params;

        // Temporary data
        const documents = [
            {
                id: 1,
                name: "Semester 5 Marksheet",
                type: "Marksheet",
                fileName: "semester-5-marksheet.pdf",
                uploadedBy: req.user.id,
                uploadedAt: "2026-09-20",
                status: "Available"
            },
            {
                id: 2,
                name: "College ID Card",
                type: "ID Card",
                fileName: "college-id-card.pdf",
                uploadedBy: req.user.id,
                uploadedAt: "2026-09-15",
                status: "Available"
            }
        ];

        const document = documents.find(
            (document) => document.id === Number(id)
        );

        if (!document) {
            return sendError(
                res,
                "Document not found",
                404
            );
        }

        return sendSuccess(
            res,
            "Document fetched successfully",
            document
        );
    } catch (error) {
        return sendError(
            res,
            "Unable to fetch document",
            500
        );
    }
};


module.exports = {
    getDocuments,
    uploadDocument,
    getDocumentById
};