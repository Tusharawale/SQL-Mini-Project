-- Table: Theatres
CREATE TABLE Theatres (
    theatre_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255)
);

-- Table: Shows
CREATE TABLE Shows (
    show_id INT AUTO_INCREMENT PRIMARY KEY,
    theatre_id INT,
    title VARCHAR(100) NOT NULL,
    show_time DATETIME,
    FOREIGN KEY (theatre_id) REFERENCES Theatres(theatre_id)
);

-- Table: Seats
CREATE TABLE Seats (
    seat_id INT AUTO_INCREMENT PRIMARY KEY,
    theatre_id INT,
    seat_number VARCHAR(10),
    is_available BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (theatre_id) REFERENCES Theatres(theatre_id)
);

-- Table: Customers
CREATE TABLE Customers (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Table: Bookings
CREATE TABLE Bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    show_id INT,
    seat_id INT,
    booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (show_id) REFERENCES Shows(show_id),
    FOREIGN KEY (seat_id) REFERENCES Seats(seat_id)
);
