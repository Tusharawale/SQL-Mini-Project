package com.example.collegeattendanceapp.models;

public class AttendanceLog {
    private int id;
    private int studentId;
    private int subjectId;
    private String date;
    private String status;

    public AttendanceLog() { }

    public AttendanceLog(int id, int studentId, int subjectId, String date, String status) {
        this.id = id;
        this.studentId = studentId;
        this.subjectId = subjectId;
        this.date = date;
        this.status = status;
    }

    public AttendanceLog(int studentId, int subjectId, String date, String status) {
        this.studentId = studentId;
        this.subjectId = subjectId;
        this.date = date;
        this.status = status;
    }

    // Getters and setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public int getSubjectId() {
        return subjectId;
    }
    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "AttendanceLog{" +
                "id=" + id +
                ", studentId=" + studentId +
                ", subjectId=" + subjectId +
                ", date='" + date + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
