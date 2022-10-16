const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const { request } = require("http");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    const query = req.body.CityName;
    const apiKey = "8ff60d9a3b8c0a616cbf93d112950c9a";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<p> The weather is currently " + weatherDescription + "</p>")
            res.write("<h1> The temperature in " + query + " is " + temp + " degree celcius. </h1>")
            res.write("<img src=" + imageURL + ">")
            res.send()
        })
    })
})










app.listen(3000, function () {
    console.log("Server is running on port 3000");
})