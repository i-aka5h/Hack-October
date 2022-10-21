package com.example.chandigarhtourguide.Museum_Activity;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.app.SearchManager;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;

import com.example.chandigarhtourguide.R;

public class activity_museum_History extends AppCompatActivity {

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        super.onOptionsItemSelected(item);
        switch (item.getItemId())
        {
            case android.R.id.home:
                finish();
                break;
        }
        return true;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_museum_history);


        ImageView i1 = (ImageView)findViewById(R.id.call_icon_image);
        i1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i1 = new Intent(Intent.ACTION_DIAL);
                i1.setData(Uri.parse("tel: 172 274 0261"));
                if(i1.resolveActivity(getPackageManager()) != null) {
                    startActivity(i1);
                }
            }
        });

        ImageView i2 = (ImageView)findViewById(R.id.web_search_image);
        i2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String info = "https://www.museumsofindia.org/museum/512/natural-history-museum";
                Intent i2 = new Intent(Intent.ACTION_WEB_SEARCH);
                i2.putExtra(SearchManager.QUERY, info);
                if (i2.resolveActivity(getPackageManager()) != null) {
                    startActivity(i2);
                }
            }
        });

        ImageView i3 = (ImageView)findViewById(R.id.google_map_search_image);
        i3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Uri gmmIntentUri = Uri.parse("https://www.google.com/maps/place/Natural+History+Museum/@30.7485029,76.7844872,17z/data=!4m9!1m2!2m1!1smuseum+of+the+evolution+of+life+chandigarh!3m5!1s0x390fed73f99deb97:0xb855f653d7c3273!8m2!3d30.7480941!4d76.7858843!15sCiptdXNldW0gb2YgdGhlIGV2b2x1dGlvbiBvZiBsaWZlIGNoYW5kaWdhcmhaLCIqbXVzZXVtIG9mIHRoZSBldm9sdXRpb24gb2YgbGlmZSBjaGFuZGlnYXJokgEOaGlzdG9yeV9tdXNldW2aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUlZPVGRVY1RkblJSQUI");
                Intent mapIntent = new Intent(Intent.ACTION_VIEW, gmmIntentUri);
                mapIntent.setPackage("com.google.android.apps.maps");
                if(mapIntent.resolveActivity(getPackageManager()) != null)
                {
                    startActivity(mapIntent);
                }

            }
        });
    }
}