// app.js

const express = require("express");
const path = require("path");
const { fetchBookInfo } = require("./bookFetcher");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { book: null });
});

app.post('/getBookInfo', async (req, res) => {
    const title = req.body.title;
    try {
        const book = await fetchBookInfo(title);
        res.render('index', { book });
    } catch (error) {
        res.render('index', { book: { error: `エラー: ${error.message}` } });
    }
});

app.listen(port, () => {
    console.log(`BookInfoFetcher app listening at http://localhost:${port}`);
});
