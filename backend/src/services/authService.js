const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// Temporary in-memory users
const users = [];

// Register a new user
const registerUser = async ({ name, email, password, role = "Student" }) => {
    const existingUser = users.find(
        (user) => user.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
        throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: users.length + 1,
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role
    };

    users.push(newUser);

    const token = generateToken(newUser);

    return {
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        },
        token
    };
};

// Login existing user
const loginUser = async (email, password) => {
    const user = users.find(
        (user) => user.email === email.toLowerCase()
    );

    if (!user) {
        throw new Error("Invalid email or password");
    }

    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
        throw new Error("Invalid email or password");
    }

    const token = generateToken(user);

    return {
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        },
        token
    };
};

// Get all users temporarily
const getUsers = () => {
    return users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    }));
};

module.exports = {
    registerUser,
    loginUser,
    getUsers
};