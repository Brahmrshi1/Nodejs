var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");



// File information 
var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory()); 
   console.log("isDirectory ? " + stats.isFIFO());
   console.log("isDirectory ? " + stats.isBlockDevice());
   console.log("isDirectory ? " + stats.isCharacterDevice());
   console.log("isDirectory ? " + stats.isSocket());
   console.log("isDirectory ? " + stats.isSymbolicLink());     

});