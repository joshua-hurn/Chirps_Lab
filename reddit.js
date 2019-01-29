let rp = require('request-promise');
let fs = require('fs');
let path = require('path');

// establishing an easy variable to use in when creating the JSON file.
let dataPath = path.join(__dirname, "./popular-articles.json")

// this is the actual requesting to reddit to get their popular posts in a JSON format. 
rp('https://www.reddit.com/r/popular.json')
// here we are taking the response from reddit and parsing that response data to be able to manipulate it later in the function.
    .then(res => JSON.parse(res))
    // then after that we take the parsed response (info) and doing stuff with it.
    .then(info => {
        let articleArray = [];
        // digging in to the objects (info.data.children). Then children is the array so we need to do something different to get our data out of that.
        info.data.children.forEach(article => {
            // using forEach and JSON.stringify to get out JSON into string format and also formatting the object that title, article and author go in.
            articleArray.push(JSON.stringify({
                "title": (article.data.title),
                "author": (article.data.author),
                "url": (article.data.url)
            }));
        })
        // creating a new file that stores the results of the above code. 
        fs.appendFileSync(dataPath, articleArray, (err) => {
            // error catching. important as otherwise and error might be more difficult to track down.
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    // catching an error if the request to reddit's api is unsuccesful.
    .catch(function (err) {
        throw err;
    });