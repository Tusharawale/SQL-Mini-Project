// File: app/src/main/java/com/example/collegeattendanceapp/activities/MainActivity.java
package com.example.collegeattendanceapp.activities;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;
import com.example.collegeattendanceapp.R;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void goToAddStudent(View view) {
        startActivity(new Intent(this, AddStudentActivity.class));
    }

    public void goToAttendance(View view) {
        startActivity(new Intent(this, AttendanceActivity.class));
    }

    public void goToReport(View view) {
        startActivity(new Intent(this, ReportActivity.class));
    }
}
