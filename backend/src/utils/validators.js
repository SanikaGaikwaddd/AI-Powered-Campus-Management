const isValidEmail = (email) => {
    if (!email || typeof email !== "string") {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPassword = (password) => {
    return (
        typeof password === "string" &&
        password.length >= 6
    );
};

const isRequired = (value) => {
    return (
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ""
    );
};

module.exports = {
    isValidEmail,
    isValidPassword,
    isRequired
};