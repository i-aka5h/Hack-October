package com.example.mycalculator

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import java.lang.ArithmeticException

class MainActivity : AppCompatActivity() {

    var lastNumeric : Boolean = false
    var lastDot: Boolean = false
    private var tvInput: TextView? = null
    private var screenVal: TextView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        tvInput = findViewById(R.id.tvInput)
    }
// here view is the actual button that is being pressed
// so whenever onDigit is called, the view is the actual button that calls this method
    fun onDigit(view: View){
//        Toast.makeText(this, "Button clicked", Toast.LENGTH_LONG).show()

//  here we are trying to access the text which is stored in view.
//  we cannot write view.text because view doesn't have the text property but button has text property
        tvInput?.append((view as Button).text)
        lastNumeric = true
        lastDot = false
    }

    fun onClear(view: View){
        tvInput?.text = ""
    }

    fun onDecimalPoint(view: View){

        if(lastNumeric && !lastDot){
            tvInput?.append(".")
            lastNumeric = false
            lastDot = true
        }

    }

    fun onRemove(view: View){
        tvInput?.text?.let {
            var screenVal = tvInput?.text.toString()
            var length : Int  = screenVal.length
            if(length <= 0){
                tvInput?.text = ""
            } else{

                var valueAfterRemoval = screenVal.substring(0,screenVal.length-1)
                tvInput?.text = valueAfterRemoval
            }

        }

    }

    fun onEqual(view: View){

        if(lastNumeric){

            var tvValue = tvInput?.text.toString()
            var prefix = ""
            try {

                if(tvValue.startsWith("-")){
                    prefix = "-"
                    tvValue = tvValue.substring(1)
//                    so if the value input is "-99" then it will make it "99"
                }

                if(tvValue.contains("-")){
//the split method will return an array in which elements will be splitted by - sign
                    val splitValue = tvValue.split("-")
//    eg: 99 - 1, so split will become an array of size 2 such that
                    var one = splitValue[0] //will contain 99
                    var two = splitValue[1] //will contain 1
// we are initially removing the minus from -99 and storing prefix and then we are adding it back
                    if(prefix.isNotEmpty()){
                        one = prefix + one
                    }

                    var result = one.toDouble() - two.toDouble()
                    tvInput?.text = removeZeroAfterDot(result.toString())


                } else if(tvValue.contains("+")){
//the split method will return an array in which elements will be splitted by - sign
                    val splitValue = tvValue.split("+")
//    eg: 99 - 1, so split will become an array of size 2 such that
                    var one = splitValue[0] //will contain 99
                    var two = splitValue[1] //will contain 1
// we are initially removing the minus from -99 and storing prefix and then we are adding it back
                    if(prefix.isNotEmpty()){
                        one = prefix + one
                    }

                    var result = one.toDouble() + two.toDouble()
                    tvInput?.text = removeZeroAfterDot(result.toString())


                } else if(tvValue.contains("/")){
//the split method will return an array in which elements will be splitted by - sign
                    val splitValue = tvValue.split("/")
//    eg: 99 - 1, so split will become an array of size 2 such that
                    var one = splitValue[0] //will contain 99
                    var two = splitValue[1] //will contain 1
// we are initially removing the minus from -99 and storing prefix and then we are adding it back
                    if(prefix.isNotEmpty()){
                        one = prefix + one
                    }

                    var result = one.toDouble() / two.toDouble()
                    tvInput?.text = removeZeroAfterDot(result.toString())


                } else if(tvValue.contains("*")){
//the split method will return an array in which elements will be splitted by - sign
                    val splitValue = tvValue.split("*")
//    eg: 99 - 1, so split will become an array of size 2 such that
                    var one = splitValue[0] //will contain 99
                    var two = splitValue[1] //will contain 1
// we are initially removing the minus from -99 and storing prefix and then we are adding it back
                    if(prefix.isNotEmpty()){
                        one = prefix + one
                    }

                    var result = one.toDouble() * two.toDouble()
                    tvInput?.text = removeZeroAfterDot(result.toString())


                }

            } catch (e: ArithmeticException){

            }

        }

    }


    private fun removeZeroAfterDot(result: String) : String{

        var value = result
        if(value.contains(".0"))
            value = result.substring(0, result.length-2)

        return value

    }

//    this function will make sure that we should have a last value so as to perform an operation
//    something like "9/9".. we cannot have "9/"
//    and if we already have a operator in the value, then we should not add another opertor like
//    9+6-+/+
    fun onOperator(view: View){

        tvInput?.text?.let {
//      let only works when both tvInput and text has a value and are not null
//the "it" which we are using here is the char sequence, which is the value we recieve
// from view i.e lambda which is automatically created for us
// let is something we use for nullables
            if(lastNumeric && !isOperatorAdded(it.toString())){
                tvInput?.append((view as Button).text)
                lastNumeric = false
                lastDot = false
            }

        }

    }


//    this will function will tell whether the value has any operator in it and
//    we are trying to ignore the - sign in the beginning of the text
    private fun isOperatorAdded(value: String) : Boolean{

        return if (value.startsWith("-")){
            false
        } else{
            value.contains("/")
                    || value.contains("+")
                    || value.contains("-")
                    || value.contains("*")
        }


    }
}