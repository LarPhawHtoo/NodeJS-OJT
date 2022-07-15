var buffer1 = new Buffer.from('TutorialsPoint');
var buffer2 = new Buffer.from('Simply Easy Learning');
let buffer3 = Buffer.concat([buffer1 , buffer2]);

console.log("buffer3 content: " + buffer3.toString());

//slicing a buffer
 buffer2 = buffer1.slice(0,9);
console.log("buffer2 content: " + buffer2.toString());

//Compare buffer
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}