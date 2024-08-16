// app.js

const express = require("express");
const path = require("path");
const { fetchData } = require("./dataFetcher");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        const data = await fetchData();
        res.render('index', { data });
    } catch (error) {
        res.render('index', { data: `エラーが発生しました: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`AsyncInfoFetcher app listening at http://localhost:${port}`);
});
