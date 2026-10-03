// Temporary notification service
// Later this will work with the database.

const createNotification = ({
    userId,
    title,
    message,
    type
}) => {
    const notification = {
        id: Date.now(),
        userId,
        title,
        message,
        type,
        isRead: false,
        createdAt: new Date().toISOString()
    };

    return notification;
};


const getNotificationMessage = (type) => {
    const messages = {
        Placement: "A new placement opportunity is available.",
        Event: "A new campus event is available.",
        Attendance: "Please check your attendance.",
        Complaint: "There is an update regarding your complaint.",
        General: "You have a new notification."
    };

    return messages[type] || messages.General;
};


module.exports = {
    createNotification,
    getNotificationMessage
};