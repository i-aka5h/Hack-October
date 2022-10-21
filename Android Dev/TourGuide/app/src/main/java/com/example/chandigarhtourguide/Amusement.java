package com.example.chandigarhtourguide;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ListView;

import com.example.chandigarhtourguide.Amusement_Activity.activity_amusement_Aqua;
import com.example.chandigarhtourguide.Amusement_Activity.activity_amusement_Fun;
import com.example.chandigarhtourguide.Amusement_Activity.activity_amusement_Musical;
import com.example.chandigarhtourguide.Amusement_Activity.activity_amusement_Thunder;

public class Amusement extends AppCompatActivity {
    ListView listView;
    String[] hotels = {"Fun City Waterpark","Thuder Zone","Aqua Village","Musical Fountain"};
    Integer[] img = {R.drawable.fun, R.drawable.thunder, R.drawable.aqua,R.drawable.musical};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_amusements);

        setContentView(R.layout.activity_shopping);
        MyListAdapter adapter = new MyListAdapter(Amusement.this, hotels, img);

        listView = (ListView) findViewById(R.id.list_view);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener((parent, view, position, id) -> {
            if (position == 0) {
                Intent intent = new Intent(Amusement.this, activity_amusement_Fun.class);
                startActivity(intent);
            } else if (position == 1) {
                Intent intent = new Intent(Amusement.this, activity_amusement_Thunder.class);
                startActivity(intent);
            } else if (position == 2) {
                Intent intent = new Intent(Amusement.this, activity_amusement_Aqua.class);
                startActivity(intent);
            } else if (position == 3) {
                Intent intent = new Intent(Amusement.this, activity_amusement_Musical.class);
                startActivity(intent);
            }

        });
    }
}