// dataFetcher.js

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("非同期データの取得に成功しました！");
        }, 2000); // 2秒後にデータを返す
    });
}

module.exports = { fetchData };
