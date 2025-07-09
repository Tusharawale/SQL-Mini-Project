CREATE DATABASE IF NOT EXISTS clinic;
USE clinic;

CREATE TABLE IF NOT EXISTS patients (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    contact VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS doctors (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialty VARCHAR(100) NOT NULL,
    contact VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS appointments (
    id VARCHAR(10) PRIMARY KEY,
    patient_id VARCHAR(10) NOT NULL,
    doctor_id VARCHAR(10) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    FOREIGN KEY (patient_id) REFERENCES patients(id) ON DELETE CASCADE,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id) ON DELETE CASCADE
);
