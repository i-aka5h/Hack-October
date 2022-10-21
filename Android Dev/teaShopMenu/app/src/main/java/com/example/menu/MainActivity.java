package com.example.menu;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.material.textfield.TextInputLayout;

import java.text.NumberFormat;
import java.util.Scanner;

public class MainActivity extends AppCompatActivity {
    int simple = 0,masala=0,lemon=0,herbal=0,black=0;
     TextInputLayout name_text ;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }

    public void submitOrder(View view) {

        name_text= findViewById(R.id.username_fullname);
        String name = name_text.getEditText().getText().toString();
        if (!name.isEmpty()) {
            if (simple > 0 || masala > 0 || lemon > 0 || herbal > 0 || black > 0) {
                name_text.setError(null);
                name_text.setErrorEnabled(false);
                Bundle bundle = new Bundle();
                bundle.putString("name",name);
                bundle.putInt("simple", simple);
                bundle.putInt("masala", masala);
                bundle.putInt("lemon", lemon);
                bundle.putInt("herbal", herbal);
                bundle.putInt("black", black);
                Intent intent = new Intent(MainActivity.this, bill.class);
                intent.putExtras(bundle);
                startActivity(intent);
            } else
                Toast.makeText(getApplicationContext(), "Choice Any Tea", Toast.LENGTH_SHORT).show();
        }
        else
            name_text.setError("Enter Your Name");
    }


    /* Black tea calculations starts   */
    private void displayQuantity_black(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_black_tea);
        quantityTextView.setText("" + number);
    }

    public void increment_black(View view) {
        black+=1;
        displayQuantity_black(black);
    }

    public void decrement_black(View view) {
        if(black<=0)
            displayQuantity_black(0);
        else
        {
            black-=1;
            displayQuantity_black(black);
        }
    }
    /*Black tea ends */


    /*herbal tea start */

    private void displayQuantity_herbal(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_herbal_tea);
        quantityTextView.setText("" + number);
    }
    public void increment_herbal(View view) {
        herbal+=1;
        displayQuantity_herbal(herbal);
    }

    public void decrement_herbal(View view) {
        if(herbal<=0)
            displayQuantity_herbal(0);
        else
        {
            herbal-=1;
            displayQuantity_herbal(herbal);
        }
    }
    /* herbal tea ends  */


    /*lemon tea starts  */
    public void increment_lemon(View view) {
        lemon+=1;
        displayQuantity_lemon(lemon);
    }

    private void displayQuantity_lemon(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_lemon_tea);
        quantityTextView.setText("" + number);
    }

    public void decrement_lemon(View view) {
        if(lemon<=0)
            displayQuantity_lemon(0);
        else
        {
            lemon-=1;
            displayQuantity_lemon(lemon);
        }
    }
    /*lemon tea ends  */

    /*masala tea starts  */
    public void increment_masala(View view) {
        masala+=1;
        displayQuantity_masala(masala);
    }

    private void displayQuantity_masala(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_masala_tea);
        quantityTextView.setText("" + number);
    }


    public void decrement_masala(View view) {
        if(masala<=0)
            displayQuantity_masala(0);
        else
        {
            masala-=1;
            displayQuantity_masala(masala);
        }
    }
/*masala tea ends  */

    /*simple tea starts  */
    public void increment_simple(View view) {
        simple+=1;
        displayQuantity_simple(simple);
    }

    private void displayQuantity_simple(int number) {
        TextView quantityTextView = (TextView) findViewById(R.id.quantity_simple_tea);
        quantityTextView.setText("" + number);
    }

    public void decrement_sipmle(View view) {
        if(simple<=0)
            displayQuantity_simple(0);
        else
        {
            simple-=1;
            displayQuantity_simple(simple);
        }
    }
    /*simple tea ends  */
}