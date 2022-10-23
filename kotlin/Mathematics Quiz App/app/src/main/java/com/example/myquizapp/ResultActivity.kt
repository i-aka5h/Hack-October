package com.example.myquizapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView

class ResultActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_result)

        val tv_name: TextView = findViewById(R.id.tv_name)
        val tv_score : TextView = findViewById(R.id.tv_score)
        val btn_finish : Button = findViewById(R.id.btn_finish)

        tv_name.text = intent.getStringExtra(Constants.USER_NAME)

        val totalQuestion = intent.getIntExtra(Constants.TOTAL_QUESTIONS, 0)
        val correctAnswers = intent.getIntExtra(Constants.CORRECT_ANSWERS, 0)

        tv_score.text = "Your Score is $correctAnswers out of $totalQuestion"

        btn_finish.setOnClickListener(){
            startActivity(Intent(this, MainActivity::class.java))
        }



    }
}