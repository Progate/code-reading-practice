const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/calculate', (req, res) => {
    const number = req.body.number;
    try {
        if (isNaN(number)) {
            throw new Error("入力された値は数値ではありません。");
        }
        const result = number * 2;  // 単純に2倍する
        res.render('result', { result: `結果: ${result}` });
    } catch (error) {
        res.render('result', { result: `エラー: ${error.message}` });
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
