// app.js

const express = require("express");
const path = require("path");
const { fetchWeather } = require("./weatherFetcher");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { weather: null });
});

app.post('/getWeather', async (req, res) => {
    const city = req.body.city;
    try {
        const weather = await fetchWeather(city);
        res.render('index', { weather });
    } catch (error) {
        res.render('index', { weather: `エラー: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`WeatherInfoFetcher app listening at http://localhost:${port}`);
});
