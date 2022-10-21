package com.example.chandigarhtourguide;

import android.app.Activity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;

public class MyListAdapter extends ArrayAdapter<String> {

    private  final Activity context;
    private final String[] names;
    private final Integer[] images;

    public MyListAdapter(@NonNull @org.jetbrains.annotations.NotNull Activity context1, String[] names, Integer[] images) {
        super(context1, R.layout.custom_layout,names);
        this.context = context1;
        this.names = names;
        this.images = images;
    }

    public View getView(int position, View view, ViewGroup parent){

        LayoutInflater inflater= context.getLayoutInflater();
        View rowView = inflater.inflate(R.layout.custom_layout, null, true);
        TextView nameText= (TextView) rowView.findViewById(R.id.name);
        ImageView imageView= (ImageView) rowView.findViewById(R.id.image);

        nameText.setText(names[position]);
        imageView.setImageResource((images[position]));

        return rowView;
    }
}
