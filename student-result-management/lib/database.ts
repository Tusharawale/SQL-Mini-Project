import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set")
}

export const sql = neon(process.env.DATABASE_URL)

export interface Student {
  id: number
  student_id: string
  first_name: string
  last_name: string
  email?: string
  phone?: string
  date_of_birth?: string
  class_level: string
  section?: string
  admission_date?: string
  status: string
  created_at: string
}

export interface Subject {
  id: number
  subject_code: string
  subject_name: string
  class_level: string
  max_marks: number
  pass_marks: number
  credit_hours: number
  created_at: string
}

export interface Mark {
  id: number
  student_id: number
  subject_id: number
  exam_type: string
  marks_obtained: number
  max_marks: number
  exam_date: string
  academic_year: string
  semester: string
  created_at: string
}

export interface Result {
  id: number
  student_id: number
  academic_year: string
  semester: string
  total_marks: number
  obtained_marks: number
  percentage: number
  grade: string
  gpa?: number
  rank_in_class?: number
  status: string
  remarks?: string
  created_at: string
}
