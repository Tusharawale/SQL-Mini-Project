CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  availability ENUM('available', 'issued') NOT NULL DEFAULT 'available',
  cover VARCHAR(255) DEFAULT NULL,
  isbn VARCHAR(20) DEFAULT NULL
);

CREATE TABLE students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  enrollment VARCHAR(100) NOT NULL
);
CREATE TABLE issue_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  book_id INT NOT NULL,
  student_id INT NOT NULL,
  issue_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  return_date DATETIME NULL,
  status ENUM('issued','returned') NOT NULL DEFAULT 'issued',
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (student_id) REFERENCES students(id)
);
CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  role ENUM('admin','librarian') NOT NULL DEFAULT 'librarian',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
