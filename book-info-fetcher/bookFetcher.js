// bookFetcher.js

async function fetchBookInfo(title) {
    const bookData = {
        "The Great Gatsby": {
            author: "F. Scott Fitzgerald",
            year: 1925,
            summary: "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan."
        },
        "To Kill a Mockingbird": {
            author: "Harper Lee",
            year: 1960,
            summary: "A novel about the serious issues of rape and racial inequality, narrated by young Scout Finch."
        },
        "1984": {
            author: "George Orwell",
            year: 1949,
            summary: "A dystopian novel set in a totalitarian society ruled by Big Brother."
        },
        "Moby Dick": {
            author: "Herman Melville",
            year: 1851,
            summary: "The narrative of Captain Ahab's obsessive quest to kill the white whale, Moby Dick."
        },
        "Pride and Prejudice": {
            author: "Jane Austen",
            year: 1813,
            summary: "A romantic novel that critiques the British landed gentry at the end of the 18th century."
        }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bookData[title]) {
                resolve(bookData[title]);
            } else {
                reject(new Error("指定された書籍の情報が見つかりません。"));
            }
        }, 2000); // 2秒後にデータを返す
    });
}

module.exports = { fetchBookInfo };
