const fs = require('fs');
const path = require('path');

let dataPath = path.join(__dirname, '../chirps.json');

let ChirpsArray = [
    {
        "author": "test",
        "chirp": "this is the actual chirp"
    },
    {
        "author": "test",
        "chirp": "this is the actual chirp"
    },
    {
        "author": "test",
        "chirp": "this is the actual chirp"
    },
    {
        "author": "test",
        "chirp": "this is the actual chirp"
    },
    {
        "author": "test",
        "chirp": "this is the actual chirp"
    }
]

fs.writeFile(dataPath, JSON.stringify(ChirpsArray), err => {
    if(err){
        console.log(err);
    }
});