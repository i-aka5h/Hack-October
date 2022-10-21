package com.example.chandigarhtourguide;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ListView;

import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_Hometel;
import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_Hyatt;
import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_JW;
import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_Lemon;
import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_Park;
import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_Radisson;
import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_Taj;
import com.example.chandigarhtourguide.Hotels_Activity.activity_hotel_lalit;
import com.example.chandigarhtourguide.Restaurant_Activity.activity_restaurant_BN;
import com.example.chandigarhtourguide.Restaurant_Activity.activity_restaurant_JW;
import com.example.chandigarhtourguide.Restaurant_Activity.activity_restaurant_Lalit;
import com.example.chandigarhtourguide.Restaurant_Activity.activity_restaurant_Lotus;
import com.example.chandigarhtourguide.Restaurant_Activity.activity_restaurant_Saffron;
import com.example.chandigarhtourguide.Restaurant_Activity.activity_restaurant_Virgin;

public class Restaurants extends AppCompatActivity {
    ListView listView;
    String[] hotels = {"The Cafe @ JW","Saffron","Barbeque Nation","Virgin Courtyard","Black Lotus","Restaurant at The Lalit Chandigarh"};
    Integer[] img_restaurants = {R.drawable.jwres, R.drawable.saffron, R.drawable.bn, R.drawable.virgin, R.drawable.lotus, R.drawable.lalitres};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_restaurants);
        MyListAdapter adapter = new MyListAdapter(Restaurants.this, hotels, img_restaurants);

        listView = (ListView) findViewById(R.id.list_view);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener((parent, view, position, id) -> {
            if (position == 0) {
                Intent intent = new Intent(Restaurants.this, activity_restaurant_JW.class);
                startActivity(intent);
            } else if (position == 1) {
                Intent intent = new Intent(Restaurants.this, activity_restaurant_Saffron.class);
                startActivity(intent);
            } else if (position == 2) {
                Intent intent = new Intent(Restaurants.this, activity_restaurant_BN.class);
                startActivity(intent);
            } else if (position == 3) {
                Intent intent = new Intent(Restaurants.this, activity_restaurant_Virgin.class);
                startActivity(intent);
            } else if (position == 4) {
                Intent intent = new Intent(Restaurants.this, activity_restaurant_Lotus.class);
                startActivity(intent);
            } else if (position == 5) {
                Intent intent = new Intent(Restaurants.this, activity_restaurant_Lalit.class);
                startActivity(intent);
            }

        });
    }
}