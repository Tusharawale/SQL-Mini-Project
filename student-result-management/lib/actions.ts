"use server"

import { sql } from "./database"
import { revalidatePath } from "next/cache"

export async function getStudents() {
  try {
    const students = await sql`
      SELECT * FROM students 
      ORDER BY class_level, section, last_name, first_name
    `
    return students
  } catch (error) {
    console.error("Error fetching students:", error)
    throw new Error("Failed to fetch students")
  }
}

export async function getSubjects() {
  try {
    const subjects = await sql`
      SELECT * FROM subjects 
      ORDER BY class_level, subject_name
    `
    return subjects
  } catch (error) {
    console.error("Error fetching subjects:", error)
    throw new Error("Failed to fetch subjects")
  }
}

export async function addStudent(formData: FormData) {
  try {
    const studentId = formData.get("student_id") as string
    const firstName = formData.get("first_name") as string
    const lastName = formData.get("last_name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const dateOfBirth = formData.get("date_of_birth") as string
    const classLevel = formData.get("class_level") as string
    const section = formData.get("section") as string

    await sql`
      INSERT INTO students (student_id, first_name, last_name, email, phone, date_of_birth, class_level, section)
      VALUES (${studentId}, ${firstName}, ${lastName}, ${email}, ${phone}, ${dateOfBirth}, ${classLevel}, ${section})
    `

    revalidatePath("/students")
    return { success: true, message: "Student added successfully" }
  } catch (error) {
    console.error("Error adding student:", error)
    return { success: false, message: "Failed to add student" }
  }
}

export async function addSubject(formData: FormData) {
  try {
    const subjectCode = formData.get("subject_code") as string
    const subjectName = formData.get("subject_name") as string
    const classLevel = formData.get("class_level") as string
    const maxMarks = Number.parseInt(formData.get("max_marks") as string)
    const passMarks = Number.parseInt(formData.get("pass_marks") as string)
    const creditHours = Number.parseInt(formData.get("credit_hours") as string)

    await sql`
      INSERT INTO subjects (subject_code, subject_name, class_level, max_marks, pass_marks, credit_hours)
      VALUES (${subjectCode}, ${subjectName}, ${classLevel}, ${maxMarks}, ${passMarks}, ${creditHours})
    `

    revalidatePath("/subjects")
    return { success: true, message: "Subject added successfully" }
  } catch (error) {
    console.error("Error adding subject:", error)
    return { success: false, message: "Failed to add subject" }
  }
}

export async function addMarks(formData: FormData) {
  try {
    const studentId = Number.parseInt(formData.get("student_id") as string)
    const subjectId = Number.parseInt(formData.get("subject_id") as string)
    const examType = formData.get("exam_type") as string
    const marksObtained = Number.parseFloat(formData.get("marks_obtained") as string)
    const maxMarks = Number.parseFloat(formData.get("max_marks") as string)
    const examDate = formData.get("exam_date") as string
    const academicYear = formData.get("academic_year") as string
    const semester = formData.get("semester") as string

    await sql`
      INSERT INTO marks (student_id, subject_id, exam_type, marks_obtained, max_marks, exam_date, academic_year, semester)
      VALUES (${studentId}, ${subjectId}, ${examType}, ${marksObtained}, ${maxMarks}, ${examDate}, ${academicYear}, ${semester})
      ON CONFLICT (student_id, subject_id, exam_type, academic_year, semester)
      DO UPDATE SET 
        marks_obtained = ${marksObtained},
        max_marks = ${maxMarks},
        exam_date = ${examDate}
    `

    revalidatePath("/marks")
    return { success: true, message: "Marks added successfully" }
  } catch (error) {
    console.error("Error adding marks:", error)
    return { success: false, message: "Failed to add marks" }
  }
}

export async function getStudentResults(studentId: number, academicYear: string, semester: string) {
  try {
    const results = await sql`
      SELECT 
        s.first_name,
        s.last_name,
        s.student_id,
        s.class_level,
        s.section,
        sub.subject_name,
        sub.subject_code,
        sub.max_marks as subject_max_marks,
        sub.pass_marks,
        m.marks_obtained,
        m.max_marks,
        m.exam_type,
        CASE 
          WHEN m.marks_obtained >= sub.pass_marks THEN 'Pass'
          ELSE 'Fail'
        END as status,
        CASE 
          WHEN m.marks_obtained >= 90 THEN 'A+'
          WHEN m.marks_obtained >= 80 THEN 'A'
          WHEN m.marks_obtained >= 70 THEN 'B'
          WHEN m.marks_obtained >= 60 THEN 'C'
          WHEN m.marks_obtained >= 50 THEN 'D'
          ELSE 'F'
        END as grade
      FROM students s
      JOIN marks m ON s.id = m.student_id
      JOIN subjects sub ON m.subject_id = sub.id
      WHERE s.id = ${studentId} 
        AND m.academic_year = ${academicYear} 
        AND m.semester = ${semester}
      ORDER BY sub.subject_name
    `

    return results
  } catch (error) {
    console.error("Error fetching student results:", error)
    throw new Error("Failed to fetch student results")
  }
}

export async function getClassPerformance(classLevel: string, academicYear: string, semester: string) {
  try {
    const performance = await sql`
      SELECT 
        s.first_name,
        s.last_name,
        s.student_id,
        AVG(m.marks_obtained) as average_marks,
        COUNT(m.id) as total_subjects,
        CASE 
          WHEN AVG(m.marks_obtained) >= 90 THEN 'A+'
          WHEN AVG(m.marks_obtained) >= 80 THEN 'A'
          WHEN AVG(m.marks_obtained) >= 70 THEN 'B'
          WHEN AVG(m.marks_obtained) >= 60 THEN 'C'
          WHEN AVG(m.marks_obtained) >= 50 THEN 'D'
          ELSE 'F'
        END as overall_grade
      FROM students s
      JOIN marks m ON s.id = m.student_id
      WHERE s.class_level = ${classLevel}
        AND m.academic_year = ${academicYear}
        AND m.semester = ${semester}
      GROUP BY s.id, s.first_name, s.last_name, s.student_id
      ORDER BY average_marks DESC
    `

    return performance
  } catch (error) {
    console.error("Error fetching class performance:", error)
    throw new Error("Failed to fetch class performance")
  }
}
