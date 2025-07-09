// File: app/src/main/java/com/example/collegeattendanceapp/activities/ReportActivity.java
package com.example.collegeattendanceapp.activities;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import com.example.collegeattendanceapp.R;
import com.example.collegeattendanceapp.database.DBHelper;

public class ReportActivity extends AppCompatActivity {
    private DBHelper dbHelper;
    private TextView reportText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_report);

        reportText = findViewById(R.id.reportText);
        dbHelper = new DBHelper(this);
        showDefaulters();
    }

    private void showDefaulters() {
        SQLiteDatabase db = dbHelper.getReadableDatabase();

        String query = "SELECT s.name, " +
                "(SUM(CASE WHEN a.status='Present' THEN 1 ELSE 0 END)*100.0/COUNT(a.id)) AS attendance_percentage " +
                "FROM Students s " +
                "JOIN AttendanceLogs a ON s.id = a.student_id " +
                "GROUP BY s.id " +
                "HAVING attendance_percentage < 75";

        Cursor cursor = db.rawQuery(query, null);
        StringBuilder sb = new StringBuilder();

        while (cursor.moveToNext()) {
            String name = cursor.getString(0) != null ? cursor.getString(0) : "Unknown";
            double percent = cursor.getDouble(1);
            sb.append("Name: ").append(name)
                    .append(" - ").append(String.format("%.2f", percent)).append("%\n");
        }

        if (sb.length() == 0) {
            sb.append("No defaulters found!");
        }

        reportText.setText(sb.toString());

        cursor.close();
        db.close();
    }
}
