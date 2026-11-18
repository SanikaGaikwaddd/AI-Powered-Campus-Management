CREATE DATABASE IF NOT EXISTS campusai;
USE campusai;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('Student','Faculty','Admin') NOT NULL DEFAULT 'Student',
  department VARCHAR(100) DEFAULT '',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  event_date DATE NOT NULL,
  event_time VARCHAR(20) NOT NULL,
  location VARCHAR(150) NOT NULL,
  category ENUM('Technical','Workshop','Sports','Cultural','Other') DEFAULT 'Other',
  organizer VARCHAR(150) NOT NULL,
  seats INT DEFAULT 0,
  registered INT DEFAULT 0,
  status ENUM('Upcoming','Ongoing','Completed','Cancelled') DEFAULT 'Upcoming'
);

CREATE TABLE IF NOT EXISTS placement_drives (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company VARCHAR(100) NOT NULL,
  role VARCHAR(100) NOT NULL,
  package_lpa DECIMAL(5,2) NOT NULL,
  location VARCHAR(100) DEFAULT '',
  deadline DATE NOT NULL,
  min_cgpa DECIMAL(3,1) DEFAULT 0,
  branches VARCHAR(200) DEFAULT '',
  status ENUM('Open','Closed') DEFAULT 'Open',
  description TEXT
);

CREATE TABLE IF NOT EXISTS complaints (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  category ENUM('Infrastructure','IT','Academic','Hostel','Library','Other') DEFAULT 'Other',
  status ENUM('Pending','In Progress','Resolved','Rejected') DEFAULT 'Pending',
  submitted_by INT NULL,
  resolution TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (submitted_by) REFERENCES users(id)
);

-- Sample data (fictional) so the RAG has something to answer from
INSERT INTO events (title, description, event_date, event_time, location, category, organizer, seats, registered, status) VALUES
('Hackathon 2026', '24-hour coding and innovation challenge open to all departments.', '2026-12-12', '09:00', 'Main Auditorium', 'Technical', 'Computer Science Department', 100, 65, 'Upcoming'),
('AI & Machine Learning Workshop', 'Hands-on workshop covering modern AI and ML concepts with live demos.', '2026-12-18', '10:00', 'AI Lab', 'Workshop', 'AI Club', 60, 42, 'Upcoming'),
('Annual Sports Meet', 'Inter-department sports competition including cricket, football and athletics.', '2027-01-05', '08:00', 'University Ground', 'Sports', 'Sports Department', 200, 120, 'Upcoming'),
('Cultural Night', 'An evening of music, dance and drama performances by students.', '2026-12-28', '18:00', 'Open Air Theatre', 'Cultural', 'Student Council', 300, 150, 'Upcoming');

INSERT INTO placement_drives (company, role, package_lpa, location, deadline, min_cgpa, branches, status, description) VALUES
('Infosys', 'Software Engineer', 8.50, 'Pune', '2026-12-05', 6.5, 'CSE, IT, AI&DS', 'Open', 'Online test followed by technical and HR interviews.'),
('TCS', 'Graduate Engineer', 7.20, 'Mumbai', '2026-12-10', 6.0, 'All branches', 'Open', 'Aptitude test, technical interview and HR round.'),
('Accenture', 'Associate Developer', 6.80, 'Pune', '2026-12-15', 6.0, 'CSE, IT, AI&DS, ECE', 'Open', 'Coding assessment and a single combined interview.'),
('Capgemini', 'Analyst', 6.50, 'Bengaluru', '2026-11-30', 6.0, 'All branches', 'Open', 'Online assessment and interview.');

INSERT INTO complaints (title, description, category, status, resolution) VALUES
('Classroom projector not working', 'The projector in Room 101 does not turn on.', 'Infrastructure', 'Resolved', 'The lamp was replaced by the maintenance team within 2 working days.'),
('Wi-Fi very slow in library', 'Internet speed in the library is very slow in the afternoon.', 'IT', 'Resolved', 'The access point in the library was upgraded and bandwidth limits were adjusted.'),
('Hostel water supply issue', 'No hot water in Block B hostel in the mornings.', 'Hostel', 'Resolved', 'The geyser system was repaired and a morning schedule was set.');