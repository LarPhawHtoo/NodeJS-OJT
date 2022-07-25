
const { Console } = require('console');
var fs = require('fs');

//Blocking Code
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");

//Non blocking Code
fs.readFile('input.txt', function (err, data) {
    if (err)
        return console.error(err);
        console.log(data.toString());
});
console.log("Program Ended");

//File Open
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});


//Writable
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");

//Piping

var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");

//Chainging the Stream
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
//fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
//  
//console.log("File Compressed.");

fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");

//Create Directory
console.log("Going to create directory /tmp/test");
fs.mkdir('test',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

//Read Directory

console.log("Going to read directory");
fs.readdir("/",function(err, files) {
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file) {
      console.log( file );
   });
});