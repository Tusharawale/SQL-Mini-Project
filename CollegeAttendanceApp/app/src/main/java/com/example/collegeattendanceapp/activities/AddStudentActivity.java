// File: app/src/main/java/com/example/collegeattendanceapp/activities/AddStudentActivity.java
package com.example.collegeattendanceapp.activities;

import android.content.ContentValues;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import com.example.collegeattendanceapp.R;
import com.example.collegeattendanceapp.database.DBHelper;

public class AddStudentActivity extends AppCompatActivity {
    private EditText etName, etRoll;
    private DBHelper dbHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_add_student);

        etName = findViewById(R.id.etName);
        etRoll = findViewById(R.id.etRoll);
        dbHelper = new DBHelper(this);
    }

    public void addStudent(View view) {
        String name = etName.getText().toString().trim();
        String roll = etRoll.getText().toString().trim();

        if (!name.isEmpty() && !roll.isEmpty()) {
            SQLiteDatabase db = dbHelper.getWritableDatabase();
            ContentValues values = new ContentValues();
            values.put("name", name);
            values.put("roll_number", roll);
            long id = db.insert("Students", null, values);
            if (id != -1) {
                Toast.makeText(this, "Student added", Toast.LENGTH_SHORT).show();
                etName.setText("");
                etRoll.setText("");
            } else {
                Toast.makeText(this, "Failed to add student", Toast.LENGTH_SHORT).show();
            }
            db.close();
        } else {
            Toast.makeText(this, "Please enter both name and roll number", Toast.LENGTH_SHORT).show();
        }
    }
}
