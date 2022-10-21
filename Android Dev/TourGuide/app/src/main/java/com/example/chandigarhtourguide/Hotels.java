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

public class Hotels extends AppCompatActivity {
    ListView listView;
    String[] hotels = {"JW Marriott Hotel Chandigarh", "Radisson Chandigarh Zirakpur", "The Lalit Chandigarh", "Hometel Chandigarh", "Park Plaza Chandigarh Zirakpur", "Hyatt Regency Chandigarh", "Taj Chandigarh", "Lemon Tree Hotel, Chandigarh"};
    Integer[] img_hotels = {R.drawable.jw, R.drawable.radisson, R.drawable.lalit, R.drawable.hometel, R.drawable.park, R.drawable.hyatt, R.drawable.tajchandigarh, R.drawable.lemon};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_hotels);

        MyListAdapter adapter = new MyListAdapter(Hotels.this, hotels, img_hotels);

        listView = (ListView) findViewById(R.id.list_view);
        listView.setAdapter(adapter);



        listView.setOnItemClickListener((parent, view, position, id) -> {
            if (position == 0) {
                Intent intent = new Intent(Hotels.this, activity_hotel_JW.class);
                startActivity(intent);
            } else if (position == 1) {
                Intent intent = new Intent(Hotels.this, activity_hotel_Radisson.class);
                startActivity(intent);
            } else if (position == 2) {
                Intent intent = new Intent(Hotels.this, activity_hotel_lalit.class);
                startActivity(intent);
            } else if (position == 3) {
                Intent intent = new Intent(Hotels.this, activity_hotel_Hometel.class);
                startActivity(intent);
            } else if (position == 4) {
                Intent intent = new Intent(Hotels.this, activity_hotel_Park.class);
                startActivity(intent);
            } else if (position == 5) {
                Intent intent = new Intent(Hotels.this, activity_hotel_Hyatt.class);
                startActivity(intent);
            } else if (position == 6) {
                Intent intent = new Intent(Hotels.this, activity_hotel_Taj.class);
                startActivity(intent);
            } else if (position == 7) {
                Intent intent = new Intent(Hotels.this, activity_hotel_Lemon.class);
                startActivity(intent);
            }

        });

    }
}