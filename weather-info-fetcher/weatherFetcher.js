// weatherFetcher.js

async function fetchWeather(city) {
    const weatherData = {
        "Tokyo": "晴れ、25°C",
        "New York": "曇り、15°C",
        "Paris": "雨、18°C",
        "London": "曇り、10°C",
        "Sydney": "晴れ、22°C"
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (weatherData[city]) {
                resolve(`${city}の天気は${weatherData[city]}です。`);
            } else {
                reject(new Error("指定された都市の天気情報が見つかりません。"));
            }
        }, 2000); // 2秒後にデータを返す
    });
}

module.exports = { fetchWeather };
