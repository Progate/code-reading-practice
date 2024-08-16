// stockFetcher.js

async function fetchStockInfo(symbol) {
    const stockData = {
        "AAPL": {
            price: "$150.00",
            change: "+1.5%",
            volume: "75M"
        },
        "GOOGL": {
            price: "$2800.00",
            change: "-0.8%",
            volume: "1.5M"
        },
        "AMZN": {
            price: "$3400.00",
            change: "+0.5%",
            volume: "3M"
        },
        "MSFT": {
            price: "$299.00",
            change: "+2.3%",
            volume: "20M"
        },
        "TSLA": {
            price: "$700.00",
            change: "-1.2%",
            volume: "12M"
        }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stockData[symbol]) {
                resolve(stockData[symbol]);
            } else {
                reject(new Error("指定された銘柄の情報が見つかりません。"));
            }
        }, 2000); // 2秒後にデータを返す
    });
}

module.exports = { fetchStockInfo };
