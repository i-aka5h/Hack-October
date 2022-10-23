package com.example.myquizapp

object Constants {

    const val USER_NAME : String = "user_name"
    const val TOTAL_QUESTIONS : String = "total_question"
    const val CORRECT_ANSWERS : String = "correct_answers"

    fun getQuestions(): ArrayList<Question>{

        val questionList = ArrayList<Question>()

        val que1 = Question(
            id = 1,
            "7 + 3 = _____",
            "3", "8", "10", "5",3
        )
        questionList.add(que1)

        val que2 = Question(
            id = 2,
            "5 - 8 = _____",
            "3", "-3", "33", "-33",2
        )
        questionList.add(que2)
        val que3 = Question(
            id = 3,
            "11 * 15 = _____",
            "174", "150", "195", "165",4
        )
        questionList.add(que3)
        val que4 = Question(
            id = 4,
            "8 * 5 = _____",
            "35", "45", "30", "40",4
        )
        questionList.add(que4)
        val que5 = Question(
            id = 5,
            "12 * 17 = _____",
            "204", "234", "200", "194",1
        )
        questionList.add(que5)


        return questionList

    }
}