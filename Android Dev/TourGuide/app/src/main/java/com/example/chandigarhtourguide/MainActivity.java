package com.example.chandigarhtourguide;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
public CardView hotel, restaurant, places, shopping, museum, education;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //defining cards
        setContentView(R.layout.activity_main);
        hotel=findViewById(R.id.hotel);
        restaurant=findViewById(R.id.restaurant);
        places=findViewById(R.id.places);
        shopping=findViewById(R.id.shopping);
        museum=findViewById(R.id.museum);
        education=findViewById(R.id.education);

        //adding on click listener to the cards
        hotel.setOnClickListener(this);
        restaurant.setOnClickListener(this);
        places.setOnClickListener(this);
        shopping.setOnClickListener(this);
        museum.setOnClickListener(this);
        education.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        Intent i;
        switch (v.getId()){
            case R.id.hotel:i=new Intent(this, Hotels.class);
            startActivity(i); break;
            case R.id.restaurant:i=new Intent(this, Restaurants.class);
            startActivity(i); break;
            case R.id.places:i=new Intent(this, Places.class);
            startActivity(i);break;
            case R.id.shopping:i=new Intent(this, Shopping.class);
            startActivity(i); break;
            case R.id.museum:i=new Intent(this, Museum.class);
            startActivity(i); break;
            case R.id.education:i=new Intent(this, Amusement.class);
            startActivity(i);break;
            default:break;
        }

    }
}