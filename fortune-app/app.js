const express = require("express");
const path = require("path");
const { getRandomFortune } = require("./fortune");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const fortune = getRandomFortune();
    res.render('index', { fortune });
});

app.listen(port, () => {
    console.log(`Fortune app listening at http://localhost:${port}`);
});
