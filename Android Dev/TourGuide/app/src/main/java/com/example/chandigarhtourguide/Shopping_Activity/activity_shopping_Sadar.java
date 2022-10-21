package com.example.chandigarhtourguide.Shopping_Activity;

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

public class activity_shopping_Sadar extends AppCompatActivity {


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
        setContentView(R.layout.activity_shopping_sadar);


        ImageView i1 = (ImageView)findViewById(R.id.call_icon_image);
        i1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i1 = new Intent(Intent.ACTION_DIAL);
                i1.setData(Uri.parse("tel:"));
                if(i1.resolveActivity(getPackageManager()) != null) {
                    startActivity(i1);
                }
            }
        });

        ImageView i2 = (ImageView)findViewById(R.id.web_search_image);
        i2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String info = "https://foursquare.com/v/sadar-bazaar/50d6d3b1e4b0b55bc2b557c5";
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
                Uri gmmIntentUri = Uri.parse("https://www.google.com/maps/place/19+Sector+Market/@30.7282783,76.7843571,15z/data=!4m9!1m2!2m1!1ssector+19+sadar+bazar+chandigarh!3m5!1s0x390fed1c5644dd3f:0x8dfebb2cea3441fc!8m2!3d30.7245762!4d76.7943703!15sCiBzZWN0b3IgMTkgc2FkYXIgYmF6YXIgY2hhbmRpZ2FyaFoiIiBzZWN0b3IgMTkgc2FkYXIgYmF6YXIgY2hhbmRpZ2FyaJIBBm1hcmtldJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSekxXVnBMV3RSUlJBQg");
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