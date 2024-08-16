const fortunes = [
    "今日はとても良い日です！",
    "あなたの努力が報われる日が来ます。",
    "ちょっとしたサプライズが待っています。",
    "少し慎重になった方が良いでしょう。",
    "新しい出会いがあなたを待っています。",
    "心を落ち着けると良い結果が得られるでしょう。",
    "困難なことも乗り越えられる力があります。",
    "あなたの周りの人々が支えてくれるでしょう。",
    "思いがけないチャンスが訪れるかもしれません。",
    "今日はリラックスして過ごすのに最適です。"
];

function getRandomFortune() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[randomIndex];
}

module.exports = { getRandomFortune };
