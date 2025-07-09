package com.example.collegeattendanceapp.activities;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.LinearLayout;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.example.collegeattendanceapp.R;
import com.example.collegeattendanceapp.database.DBHelper;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

public class AttendanceActivity extends AppCompatActivity {
    private LinearLayout studentList;
    private DBHelper dbHelper;
    private int subjectId = 1; // You can change this or make dynamic
    private String currentDate;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_attendance);

        studentList = findViewById(R.id.studentList);
        dbHelper = new DBHelper(this);

        currentDate = new SimpleDateFormat("yyyy-MM-dd", Locale.getDefault()).format(new Date());
        loadStudents();
    }

    private void loadStudents() {
        SQLiteDatabase db = dbHelper.getReadableDatabase();
        Cursor cursor = db.rawQuery("SELECT id, name FROM Students", null);
        studentList.removeAllViews();

        while (cursor.moveToNext()) {
            int studentId = cursor.getInt(cursor.getColumnIndexOrThrow("id"));
            String name = cursor.getString(cursor.getColumnIndexOrThrow("name"));
            CheckBox checkBox = new CheckBox(this);
            checkBox.setText(name);
            checkBox.setTag(studentId);
            studentList.addView(checkBox);
        }

        cursor.close();
        db.close();
    }

    public void submitAttendance(View view) {
        SQLiteDatabase db = dbHelper.getWritableDatabase();

        try {
            db.beginTransaction();

            for (int i = 0; i < studentList.getChildCount(); i++) {
                CheckBox cb = (CheckBox) studentList.getChildAt(i);
                int studentId = (int) cb.getTag();
                String status = cb.isChecked() ? "Present" : "Absent";

                // Check if attendance already recorded for this student, subject, date
                Cursor cursor = db.rawQuery(
                        "SELECT id FROM AttendanceLogs WHERE student_id=? AND subject_id=? AND date=?",
                        new String[]{String.valueOf(studentId), String.valueOf(subjectId), currentDate});

                ContentValues values = new ContentValues();
                values.put("student_id", studentId);
                values.put("subject_id", subjectId);
                values.put("date", currentDate);
                values.put("status", status);

                if (cursor.moveToFirst()) {
                    // Update existing attendance record
                    int attendanceId = cursor.getInt(cursor.getColumnIndexOrThrow("id"));
                    db.update("AttendanceLogs", values, "id=?", new String[]{String.valueOf(attendanceId)});
                } else {
                    // Insert new attendance record
                    db.insert("AttendanceLogs", null, values);
                }
                cursor.close();
            }

            db.setTransactionSuccessful();
            Toast.makeText(this, "Attendance saved", Toast.LENGTH_SHORT).show();
        } catch (Exception e) {
            Toast.makeText(this, "Error saving attendance: " + e.getMessage(), Toast.LENGTH_LONG).show();
        } finally {
            db.endTransaction();
            db.close();
        }
    }
}
