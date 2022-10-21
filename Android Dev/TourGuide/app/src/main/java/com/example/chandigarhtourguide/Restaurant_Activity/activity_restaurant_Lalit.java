package com.example.chandigarhtourguide.Restaurant_Activity;


import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;

import android.app.SearchManager;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;

import com.example.chandigarhtourguide.R;

public class activity_restaurant_Lalit extends AppCompatActivity {

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
        setContentView(R.layout.activity_restaurant_lalit);


        ImageView i1 = (ImageView)findViewById(R.id.call_icon_image);
        i1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i1 = new Intent(Intent.ACTION_DIAL);
                i1.setData(Uri.parse("tel:+911726767777"));
                if(i1.resolveActivity(getPackageManager()) != null) {
                    startActivity(i1);
                }
            }
        });

        ImageView i2 = (ImageView)findViewById(R.id.web_search_image);
        i2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String info = "https://www.thelalit.com/the-lalit-chandigarh/eat-and-drink/";
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
                Uri gmmIntentUri = Uri.parse("https://www.google.com/maps/place/24%2F7+Restaurant/@30.7307924,76.839285,17z/data=!4m13!1m6!2m5!1sThe+LaLiT+Chandigarh+24%2F7!5m3!5m2!4m1!1i2!3m5!1s0x390f92d96a4b9e0b:0x5448d591e86e4d3d!8m2!3d30.7305849!4d76.8414933!15sChlUaGUgTGFMaVQgQ2hhbmRpZ2FyaCAyNC83Ig-IAQHaAQkKBwjmDxAHGBhaGyIZdGhlIGxhbGl0IGNoYW5kaWdhcmggMjQgN5IBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUkJhM1ptZWtkM0VBRQ");
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