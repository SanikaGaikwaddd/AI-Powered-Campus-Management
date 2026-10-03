# AI-Powered Campus Management System

An AI-powered campus management platform designed to bring important student, faculty, and administrative services into a single web application.

The system provides modules for authentication, attendance, timetable management, placements, campus events, complaints, lost and found, documents, notifications, and AI-assisted services.

---

## Features

### Authentication & Authorization
- User registration and login
- JWT-based authentication
- Password hashing using bcrypt
- Role-based access control
- Student, Faculty, and Admin roles
- Protected API routes

### Student Services
- Student profile
- Attendance tracking
- Timetable
- Placement opportunities
- Placement applications
- Campus events
- Event registration
- Complaint management
- Lost and Found
- Document management
- Notifications

### Backend
- RESTful API
- Express.js server
- MongoDB database using Mongoose
- JWT authentication
- Role-based authorization
- File upload support
- Centralized error handling

### AI Services
AI-related functionality is designed as a separate service and can be integrated with the backend through APIs.

---

## Tech Stack

### Frontend
- React.js
- React Router
- JavaScript
- CSS
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Multer
- CORS
- dotenv

### Development Tools
- Git
- GitHub
- VS Code
- Postman
- Nodemon

---

## Project Structure

```text
AI-Powered-Campus-Management/
│
├── frontend/
│   └── React frontend
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── env.js
│   │   │   └── database.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Attendance.js
│   │   │   ├── Timetable.js
│   │   │   ├── PlacementDrive.js
│   │   │   ├── Application.js
│   │   │   ├── Event.js
│   │   │   ├── EventRegistration.js
│   │   │   ├── Complaint.js
│   │   │   ├── LostFoundItem.js
│   │   │   ├── Document.js
│   │   │   └── Notification.js
│   │   │
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
└── README.md
