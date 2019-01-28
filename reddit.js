let rp = require('request-promise');
let fs = require('fs');
let path = require('path');

let dataPath = path.join(__dirname, "./popular-articles.json")

rp('https://www.reddit.com/r/popular.json')
    .then(res => JSON.parse(res))
    .then(info => {
        let articleArray = [];
        info.data.children.forEach(article => {
            articleArray.push(JSON.stringify({
                "title": (article.data.title),
                "author": (article.data.author),
                "url": (article.data.url)
            }));
        })
        fs.appendFileSync(dataPath, articleArray, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch(function (err) {
        throw err;
    });