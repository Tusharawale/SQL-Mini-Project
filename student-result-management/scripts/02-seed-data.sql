-- Insert sample students
INSERT INTO students (student_id, first_name, last_name, email, phone, date_of_birth, class_level, section) VALUES
('STU001', 'John', 'Doe', 'john.doe@school.edu', '1234567890', '2005-03-15', 'Grade 10', 'A'),
('STU002', 'Jane', 'Smith', 'jane.smith@school.edu', '1234567891', '2005-07-22', 'Grade 10', 'A'),
('STU003', 'Mike', 'Johnson', 'mike.johnson@school.edu', '1234567892', '2005-01-10', 'Grade 10', 'B'),
('STU004', 'Sarah', 'Williams', 'sarah.williams@school.edu', '1234567893', '2005-09-05', 'Grade 10', 'A'),
('STU005', 'David', 'Brown', 'david.brown@school.edu', '1234567894', '2005-11-18', 'Grade 10', 'B'),
('STU006', 'Emily', 'Davis', 'emily.davis@school.edu', '1234567895', '2004-04-12', 'Grade 11', 'A'),
('STU007', 'Chris', 'Miller', 'chris.miller@school.edu', '1234567896', '2004-08-30', 'Grade 11', 'A'),
('STU008', 'Lisa', 'Wilson', 'lisa.wilson@school.edu', '1234567897', '2004-02-14', 'Grade 11', 'B');

-- Insert sample subjects
INSERT INTO subjects (subject_code, subject_name, class_level, max_marks, pass_marks, credit_hours) VALUES
('MATH10', 'Mathematics', 'Grade 10', 100, 40, 4),
('ENG10', 'English', 'Grade 10', 100, 40, 3),
('SCI10', 'Science', 'Grade 10', 100, 40, 4),
('HIST10', 'History', 'Grade 10', 100, 40, 3),
('GEOG10', 'Geography', 'Grade 10', 100, 40, 3),
('MATH11', 'Advanced Mathematics', 'Grade 11', 100, 40, 4),
('ENG11', 'Advanced English', 'Grade 11', 100, 40, 3),
('PHYS11', 'Physics', 'Grade 11', 100, 40, 4),
('CHEM11', 'Chemistry', 'Grade 11', 100, 40, 4),
('BIO11', 'Biology', 'Grade 11', 100, 40, 4);

-- Insert sample marks
INSERT INTO marks (student_id, subject_id, exam_type, marks_obtained, max_marks, exam_date, academic_year, semester) VALUES
-- Grade 10 students
(1, 1, 'midterm', 85, 100, '2024-03-15', '2023-24', 'Spring'),
(1, 2, 'midterm', 78, 100, '2024-03-16', '2023-24', 'Spring'),
(1, 3, 'midterm', 92, 100, '2024-03-17', '2023-24', 'Spring'),
(1, 4, 'midterm', 76, 100, '2024-03-18', '2023-24', 'Spring'),
(1, 5, 'midterm', 88, 100, '2024-03-19', '2023-24', 'Spring'),

(2, 1, 'midterm', 92, 100, '2024-03-15', '2023-24', 'Spring'),
(2, 2, 'midterm', 89, 100, '2024-03-16', '2023-24', 'Spring'),
(2, 3, 'midterm', 95, 100, '2024-03-17', '2023-24', 'Spring'),
(2, 4, 'midterm', 87, 100, '2024-03-18', '2023-24', 'Spring'),
(2, 5, 'midterm', 91, 100, '2024-03-19', '2023-24', 'Spring'),

(3, 1, 'midterm', 72, 100, '2024-03-15', '2023-24', 'Spring'),
(3, 2, 'midterm', 68, 100, '2024-03-16', '2023-24', 'Spring'),
(3, 3, 'midterm', 75, 100, '2024-03-17', '2023-24', 'Spring'),
(3, 4, 'midterm', 70, 100, '2024-03-18', '2023-24', 'Spring'),
(3, 5, 'midterm', 73, 100, '2024-03-19', '2023-24', 'Spring'),

-- Grade 11 students
(6, 6, 'midterm', 88, 100, '2024-03-15', '2023-24', 'Spring'),
(6, 7, 'midterm', 85, 100, '2024-03-16', '2023-24', 'Spring'),
(6, 8, 'midterm', 90, 100, '2024-03-17', '2023-24', 'Spring'),
(6, 9, 'midterm', 87, 100, '2024-03-18', '2023-24', 'Spring'),
(6, 10, 'midterm', 89, 100, '2024-03-19', '2023-24', 'Spring');

-- Insert sample attendance
INSERT INTO attendance (student_id, subject_id, attendance_date, status, academic_year, semester) VALUES
(1, 1, '2024-01-15', 'present', '2023-24', 'Spring'),
(1, 1, '2024-01-16', 'present', '2023-24', 'Spring'),
(1, 1, '2024-01-17', 'absent', '2023-24', 'Spring'),
(2, 1, '2024-01-15', 'present', '2023-24', 'Spring'),
(2, 1, '2024-01-16', 'present', '2023-24', 'Spring'),
(2, 1, '2024-01-17', 'present', '2023-24', 'Spring');
