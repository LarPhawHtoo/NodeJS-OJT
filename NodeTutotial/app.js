
const { Console } = require('console');
var fs = require('fs');
//fs.readFile('text.txt', function (err, data) {
//    if (err)
//        return console.error(err);
//    console.log(data.toString());
//});
//console.log("Program Ended");
var data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log("Program Ended");