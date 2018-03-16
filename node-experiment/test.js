let fs = require('fs'),
    http = require('http'),
    https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function (error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats!");
    }
});

var photoUrl = "http://images4.fanpop.com/image/photos/14700000/Beautifull-cat-cats-14749913-1400-1050.jpg";
http.get(photoUrl, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/kitty.jpeg"));
});