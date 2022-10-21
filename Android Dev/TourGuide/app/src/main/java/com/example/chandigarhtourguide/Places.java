package com.example.chandigarhtourguide;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ListView;

import com.example.chandigarhtourguide.Places_Activity.activity_places_Art;
import com.example.chandigarhtourguide.Places_Activity.activity_places_Dolls;
import com.example.chandigarhtourguide.Places_Activity.activity_places_Gurudwara;
import com.example.chandigarhtourguide.Places_Activity.activity_places_Japanese;
import com.example.chandigarhtourguide.Places_Activity.activity_places_Rock;
import com.example.chandigarhtourguide.Places_Activity.activity_places_Rose;
import com.example.chandigarhtourguide.Places_Activity.activity_places_Sukhna;

public class Places extends AppCompatActivity {
    ListView listView;
    String[] hotels = {"Nek Chand’s Rock Garden","Sukhna Lake","Zakir Hussain Rose Garden","Government Museum and Art Gallery","International Dolls Museum","Japanese Garden","Nada Sahib Gurudwara"};
    Integer[] img_places = {R.drawable.rock, R.drawable.sukhna, R.drawable.rose, R.drawable.artgallery, R.drawable.doll, R.drawable.japanese, R.drawable.gurudwara};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_places);
        MyListAdapter adapter = new MyListAdapter(Places.this, hotels, img_places);

        listView = (ListView) findViewById(R.id.list_view);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener((parent, view, position, id) -> {
            if (position == 0) {
                Intent intent = new Intent(Places.this, activity_places_Rock.class);
                startActivity(intent);
            } else if (position == 1) {
                Intent intent = new Intent(Places.this, activity_places_Sukhna.class);
                startActivity(intent);
            } else if (position == 2) {
                Intent intent = new Intent(Places.this, activity_places_Rose.class);
                startActivity(intent);
            }  else if (position == 3) {
                Intent intent = new Intent(Places.this, activity_places_Art.class);
                startActivity(intent);
            } else if (position == 4) {
                Intent intent = new Intent(Places.this, activity_places_Dolls.class);
                startActivity(intent);
            } else if (position == 5) {
                Intent intent = new Intent(Places.this, activity_places_Japanese.class);
                startActivity(intent);
            } else if (position == 6) {
                Intent intent = new Intent(Places.this, activity_places_Gurudwara.class);
                startActivity(intent);
            }

        });
    }
}