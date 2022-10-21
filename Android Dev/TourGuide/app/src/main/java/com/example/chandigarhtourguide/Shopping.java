package com.example.chandigarhtourguide;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ListView;

import com.example.chandigarhtourguide.Shopping_Activity.activity_shopping_Elante;
import com.example.chandigarhtourguide.Shopping_Activity.activity_shopping_Emporium;
import com.example.chandigarhtourguide.Shopping_Activity.activity_shopping_Krishna;
import com.example.chandigarhtourguide.Shopping_Activity.activity_shopping_North;
import com.example.chandigarhtourguide.Shopping_Activity.activity_shopping_Rehri;
import com.example.chandigarhtourguide.Shopping_Activity.activity_shopping_Sadar;
import com.example.chandigarhtourguide.Shopping_Activity.activity_shopping_Sector;

public class Shopping extends AppCompatActivity {
    ListView listView;
    String[] hotels = {"North Country Mall","Elante Mall","Sector 11 Market","Rehri Market, Chandigarh","Punjab Government Emporium","Krishna Market","Sadar Bazaar, Chandigarh"};
    Integer[] img_hotels = {R.drawable.north, R.drawable.elante, R.drawable.sector11, R.drawable.rehri, R.drawable.gov, R.drawable.krishna, R.drawable.sadar};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shopping);
        MyListAdapter adapter = new MyListAdapter(Shopping.this, hotels, img_hotels);

        listView = (ListView) findViewById(R.id.list_view);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener((parent, view, position, id) -> {
            if (position == 0) {
                Intent intent = new Intent(Shopping.this, activity_shopping_North.class);
                startActivity(intent);
            } else if (position == 1) {
                Intent intent = new Intent(Shopping.this, activity_shopping_Elante.class);
                startActivity(intent);
            } else if (position == 2) {
                Intent intent = new Intent(Shopping.this, activity_shopping_Sector.class);
                startActivity(intent);
            } else if (position == 3) {
                Intent intent = new Intent(Shopping.this, activity_shopping_Rehri.class);
                startActivity(intent);
            } else if (position == 4) {
                Intent intent = new Intent(Shopping.this, activity_shopping_Emporium.class);
                startActivity(intent);
            } else if (position == 5) {
                Intent intent = new Intent(Shopping.this, activity_shopping_Krishna.class);
                startActivity(intent);
            } else if (position == 6) {
                Intent intent = new Intent(Shopping.this, activity_shopping_Sadar.class);
                startActivity(intent);
            }

        });
    }
}