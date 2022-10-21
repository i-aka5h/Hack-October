package com.example.chandigarhtourguide;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ListView;

import com.example.chandigarhtourguide.Museum_Activity.activity_museum_Dolls;
import com.example.chandigarhtourguide.Museum_Activity.activity_museum_Evolution;
import com.example.chandigarhtourguide.Museum_Activity.activity_museum_History;
import com.example.chandigarhtourguide.Museum_Activity.activity_museum_Kala;

public class Museum extends AppCompatActivity {
    ListView listView;
    String[] hotels = {"International Dolls Museum","Punjab Kala Kendra","Museum of the Evolution of Life","The Natural History Museum"};
    Integer[] img_hotels = {R.drawable.dollsmuseum, R.drawable.kala, R.drawable.evoltion, R.drawable.natural};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_museum);
        MyListAdapter adapter = new MyListAdapter(Museum.this, hotels, img_hotels);

        listView = (ListView) findViewById(R.id.list_view);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener((parent, view, position, id) -> {
            if (position == 0) {
                Intent intent = new Intent(Museum.this, activity_museum_Dolls.class);
                startActivity(intent);
            } else if (position == 1) {
                Intent intent = new Intent(Museum.this, activity_museum_Kala.class);
                startActivity(intent);
            } else if (position == 2) {
                Intent intent = new Intent(Museum.this, activity_museum_Evolution.class);
                startActivity(intent);
            } else if (position == 3) {
                Intent intent = new Intent(Museum.this, activity_museum_History.class);
                startActivity(intent);
            }

        });
    }
}