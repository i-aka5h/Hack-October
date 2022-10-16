package com.example.stopwatch;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    TextView textview;
    ImageView start, reset, stop;
    int milliseconds = 0;
    boolean is_start;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        textview = findViewById(R.id.TimerText);
        start = findViewById(R.id.start);
        reset = findViewById(R.id.reset);
        stop = findViewById(R.id.stop);
        startTimer();

        start.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                Context context = getApplicationContext();
                CharSequence text = "Start";
                int duration = Toast.LENGTH_SHORT;

                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
                return false;
            }
        });

        reset.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                Context context = getApplicationContext();
                CharSequence text = "Reset";
                int duration = Toast.LENGTH_SHORT;

                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
                return false;
            }
        });

        stop.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                Context context = getApplicationContext();
                CharSequence text = "Stop";
                int duration = Toast.LENGTH_SHORT;

                Toast toast = Toast.makeText(context, text, duration);
                toast.show();
                return false;
            }
        });

    }

    public void start(View view) {
        is_start = true;
    }


    public void reset(View view) {
        is_start = false;
        milliseconds = 0;
    }

    public void stop(View view) {
        is_start = false;
    }

    public void startTimer() {
        Handler handler = new Handler();
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                int millisec = milliseconds % 100;
                int sec = milliseconds / 100;
                int min = sec / 60;
                int hrs = min / 60;

                if (is_start)
                    milliseconds++;
                String formatString = String.format(Locale.getDefault(), "%02d:%02d:%02d", min, sec, millisec);

                textview.setText(formatString);
                handler.postDelayed(this, 10);
            }
        };
        handler.post(runnable);
    }
}