package com.example.casio;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;

public class MainActivity extends AppCompatActivity {
    ImageView btn_0, btn_1, btn_2, btn_3, btn_4, btn_5, btn_6, btn_7, btn_8, btn_9;
    ImageView btn_dot, btn_equal, btn_ac, btn_module, btn_multiply, btn_minus, btn_plus, btn_divide;
    TextView input, output;
    String data;
    int cnt_dot = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btn_0 = findViewById(R.id.btn_0);
        btn_1 = findViewById(R.id.btn_1);
        btn_2 = findViewById(R.id.btn_2);
        btn_3 = findViewById(R.id.btn_3);
        btn_4 = findViewById(R.id.btn_4);
        btn_5 = findViewById(R.id.btn_5);
        btn_6 = findViewById(R.id.btn_6);
        btn_7 = findViewById(R.id.btn_7);
        btn_8 = findViewById(R.id.btn_8);
        btn_9 = findViewById(R.id.btn_9);
        btn_dot = findViewById(R.id.btn_dot);
        btn_equal = findViewById(R.id.btn_equal);
        btn_ac = findViewById(R.id.btn_ac);
        btn_module = findViewById(R.id.btn_module);
        btn_multiply = findViewById(R.id.btn_multiply);
        btn_minus = findViewById(R.id.btn_minus);
        btn_plus = findViewById(R.id.btn_plus);
        btn_divide = findViewById(R.id.btn_division);

        input = findViewById(R.id.Input);
//        output=findViewById(R.id.Output);
//Button 0
        btn_0.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "0");
            }
        });
//Button 1
        btn_1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "1");
            }
        });
//Button 2
        btn_2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "2");
            }
        });
//Button 3
        btn_3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "3");
            }
        });
//Button 4
        btn_4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "4");
            }
        });
//Button 5
        btn_5.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "5");
            }
        });
//       Some Unique Feature
        btn_5.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                input.setText("Jai Mata Di");
                return false;
            }
        });
//Button 6
        btn_6.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "6");
            }
        });
//Button 7
        btn_7.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "7");
            }
        });
//Button 8
        btn_8.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "8");
            }
        });
//Button 9
        btn_9.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                input.setText(data + "9");
            }
        });
//Button dot
        btn_dot.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                int len = data.length();
//                int dot_check=0;
//                dot_check=data.indexOf('.');
                if (len > 0)
                    if (data.charAt(len - 1) == '/' || data.charAt(len - 1) == '×' || data.charAt(len - 1) == '%' || data.charAt(len - 1) == '+' || data.charAt(len - 1) == '-' || data.charAt(len - 1) == '.')
                        input.setText(data.substring(0, len - 1) + ".");
                    else
                        input.setText(data + ".");
            }
        });
//Button ALl Clear
        btn_ac.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                input.setText("");
//                output.setText("");
            }
        });
//Addition
        btn_plus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                int len = data.length();
                if (len > 0)
                    if (data.charAt(len - 1) == '/' || data.charAt(len - 1) == '×' || data.charAt(len - 1) == '%' || data.charAt(len - 1) == '+' || data.charAt(len - 1) == '-' || data.charAt(len - 1) == '.')
                        input.setText(data.substring(0, len - 1) + "+");
                    else
                        input.setText(data + "+");
            }
        });
//Subtraction
        btn_minus.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                int len = data.length();
                if (len > 0)
                    if (data.charAt(len - 1) == '/' || data.charAt(len - 1) == '×' || data.charAt(len - 1) == '%' || data.charAt(len - 1) == '+' || data.charAt(len - 1) == '-' || data.charAt(len - 1) == '.')
                        input.setText(data.substring(0, len - 1) + "-");
                    else
                        input.setText(data + "-");
            }
        });
//Modulus
        btn_module.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                int len = data.length();
                if (len > 0)
                    if (data.charAt(len - 1) == '/' || data.charAt(len - 1) == '×' || data.charAt(len - 1) == '%' || data.charAt(len - 1) == '+' || data.charAt(len - 1) == '-' || data.charAt(len - 1) == '.')
                        input.setText(data.substring(0, len - 1) + "%");
                    else
                        input.setText(data + "%");
            }
        });
//Multiplication
        btn_multiply.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                int len = data.length();
                if (len > 0)
                    if (data.charAt(len - 1) == '/' || data.charAt(len - 1) == '×' || data.charAt(len - 1) == '%' || data.charAt(len - 1) == '+' || data.charAt(len - 1) == '-' || data.charAt(len - 1) == '.')
                        input.setText(data.substring(0, len - 1) + "×");
                    else
                        input.setText(data + "×");
            }
        });
//Division
        btn_divide.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                int len = data.length();
                if (len > 0)
                    if (data.charAt(len - 1) == '/' || data.charAt(len - 1) == '×' || data.charAt(len - 1) == '%' || data.charAt(len - 1) == '+' || data.charAt(len - 1) == '-' || data.charAt(len - 1) == '.')
                        input.setText(data.substring(0, len - 1) + "/");
                    else
                        input.setText(data + "/");
            }
        });
        //Calculate result
        btn_equal.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                data = input.getText().toString();
                int len = data.length();
//                if(len<1)
//                    input.setText(data);
//
                if (len == 1)
                    input.setText(data);
                if (len > 1)
                    if ((data.charAt(len - 1) != '/' && data.charAt(len - 1) != '×' && data.charAt(len - 1) != '+' && data.charAt(len - 1) != '-' && data.charAt(len - 1) != '.') || data.charAt(len - 1) == '%') {
                        data = data.replaceAll("×", "*");
                        data = data.replaceAll("%", "/100");
                        data = data.replaceAll("/", "/");

                        Context rhino = Context.enter();
                        rhino.setOptimizationLevel(-1);

                        String finalResult = "";

                        Scriptable scriptable = rhino.initStandardObjects();
                        finalResult = rhino.evaluateString(scriptable, data, "Javsscript", 1, null).toString();
                        input.setText((finalResult));
                        int decimal_index = finalResult.length();
                        if (finalResult.charAt(decimal_index - 1) != '0')
                            input.setText(finalResult);
                        else
                            input.setText(finalResult.substring(0, decimal_index - 2));
                    }
            }
        });

    }

    //Remove Last character
    public void backspace(View view) {
        String word = input.getText().toString();
        int len = word.length();
        if (len > 0)
            input.setText(word.substring(0, len - 1));
    }

    //Sign change from positive to negative and vice versa
    public void sign(View view) {
        String word = input.getText().toString();
        int len = word.length();
        if (len > 0)
            if (word.charAt(0) == '-')
                input.setText(word.substring(1, len));
            else
                input.setText("-" + word.substring(0, len));
    }
}