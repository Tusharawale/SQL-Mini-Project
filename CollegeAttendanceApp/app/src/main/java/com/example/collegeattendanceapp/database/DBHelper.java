// File: app/src/main/java/com/example/collegeattendanceapp/database/DBHelper.java
package com.example.collegeattendanceapp.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

public class DBHelper extends SQLiteOpenHelper {
    public static final String DB_NAME = "attendance.db";
    public static final int DB_VERSION = 1;

    public DBHelper(Context context) {
        super(context, DB_NAME, null, DB_VERSION);
    }

    @Override
    public void onConfigure(SQLiteDatabase db) {
        super.onConfigure(db);
        db.setForeignKeyConstraintsEnabled(true);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        db.execSQL("CREATE TABLE Students(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "name TEXT NOT NULL, " +
                "roll_number TEXT UNIQUE NOT NULL)");

        db.execSQL("CREATE TABLE Subjects(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "name TEXT NOT NULL)");

        db.execSQL("CREATE TABLE AttendanceLogs(" +
                "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
                "student_id INTEGER NOT NULL, " +
                "subject_id INTEGER NOT NULL, " +
                "date TEXT NOT NULL, " +
                "status TEXT NOT NULL, " +
                "FOREIGN KEY(student_id) REFERENCES Students(id) ON DELETE CASCADE, " +
                "FOREIGN KEY(subject_id) REFERENCES Subjects(id) ON DELETE CASCADE)");

        db.execSQL("CREATE INDEX idx_attendance_student ON AttendanceLogs(student_id)");
        db.execSQL("CREATE INDEX idx_attendance_date ON AttendanceLogs(date)");
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS AttendanceLogs");
        db.execSQL("DROP TABLE IF EXISTS Students");
        db.execSQL("DROP TABLE IF EXISTS Subjects");
        onCreate(db);
    }
}
