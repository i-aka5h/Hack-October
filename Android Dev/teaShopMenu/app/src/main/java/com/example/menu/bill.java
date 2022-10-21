package com.example.menu;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class bill extends AppCompatActivity {
TextView price_message;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.bill);
        Bundle bundle = getIntent().getExtras();
        int simple = bundle.getInt("simple");
        int masala = bundle.getInt("masala");
        int lemon = bundle.getInt("lemon");
        int black= bundle.getInt("black");
        int herbal = bundle.getInt("herbal");
        String name = bundle.getString("name");
        int total_bill =  simple*10 +masala *20 +lemon*25+black*30+herbal*30;
        price_message = (TextView)findViewById(R.id.order_summary_text_view);
            String priceMessage = "Name : "+name;
            if(simple>0)
            priceMessage = priceMessage+"\nSimple Tea : "+simple;
            if(masala>0)
                priceMessage = priceMessage+"\nMasala Tea : "+masala;
            if(lemon>0)
                priceMessage = priceMessage+"\nLemon Tea : "+lemon;
            if(herbal>0)
                priceMessage = priceMessage+"\nHerbal Tea : "+herbal;
            if(black>0)
                priceMessage = priceMessage+"\nBlack Tea : "+black;
            priceMessage = priceMessage+"\n\nTotal : ₹"+total_bill;
            priceMessage = priceMessage + "\nThank You!";
            price_message.setText(""+priceMessage);
    }
}