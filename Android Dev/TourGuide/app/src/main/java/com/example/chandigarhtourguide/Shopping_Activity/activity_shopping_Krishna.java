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

public class activity_shopping_Krishna extends AppCompatActivity {


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
        setContentView(R.layout.activity_shopping_krishna);


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
                String info = "https://www.google.com/search?q=krishna+market+chandigarh&rlz=1C1ONGR_enIN957IN957&sxsrf=ALeKk03pdqiWgJl-N4czonOX7LoLzXa1lw%3A1627742608480&ei=kGEFYc7xHPnAz7sPmdy-6AE&gs_ssp=eJzj4tVP1zc0TDcsyDMuMbE0YPSSzC7KLM7IS1TITSzKTi1RSM5IzEvJTE8sygAAFt0OGg&oq=Krishna+Market+chandigarh&gs_lcp=Cgdnd3Mtd2l6EAEYADIICC4QgAQQkwIyBggAEAcQHjIGCAAQBxAeMgQIABAeMgQIABAeMggIABAFEAoQHjIGCAAQCBAeMgYIABAIEB46BwgAEEcQsANKBAhBGABQrIYGWKyGBmCwjgZoAnACeACAAeYBiAGPA5IBBTAuMS4xmAEAoAECoAEByAEDwAEB&sclient=gws-wiz";
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
                Uri gmmIntentUri = Uri.parse("https://www.google.com/maps/place/Krishna+Market,+Block+C,+Sector+41,+Chandigarh,+160041/data=!4m2!3m1!1s0x390fedd93f3cca93:0xe2e36685b7637a0e?sa=X&ved=2ahUKEwjjmJuQxo3yAhWm8XMBHc-yBj8Q8gEwHXoECDQQAQ");
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