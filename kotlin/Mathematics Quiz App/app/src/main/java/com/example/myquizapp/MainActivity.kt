package com.example.myquizapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btn_start : Button = findViewById(R.id.btn_start)
        val et_name : EditText = findViewById(R.id.et_name)

        btn_start.setOnClickListener {

            if(et_name.text.isEmpty()){
                Toast.makeText(this, "Please Enter your name", Toast.LENGTH_LONG).show()
            } else{

//                we want to move to a different screen i.e we want to move to a new activity
//                so we'll create an intent for the same
                val intent = Intent(this, QuizQuestionsActivity::class.java)
//            the above statement means that we are moving from this (current) activity to
//            QuizQuestionsActivity and since this is a java file so we need to add class.java
// the start activity will start the intent page and the finish() will stop the current page
                intent.putExtra(Constants.USER_NAME, et_name.text.toString())
                startActivity(intent)
                finish()
            }

        }
    }
}