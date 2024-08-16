// app.js

const express = require("express");
const path = require("path");
const { fetchStockInfo } = require("./stockFetcher");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { stock: null });
});

app.post('/getStockInfo', async (req, res) => {
    const symbol = req.body.symbol;
    try {
        const stock = await fetchStockInfo(symbol);
        res.render('index', { stock, symbol });
    } catch (error) {
        res.render('index', { stock: { error: `エラー: ${error.message}` }, symbol });
    }
});

app.listen(port, () => {
    console.log(`StockInfoFetcher app listening at http://localhost:${port}`);
});
