// As always, we grab the fs package to handle read/write
var fs = require("fs");

var action = process.argv[2];

if(action === "total"){
  fs.readFile("bank.txt", "utf8", function(error, data){
    console.log(data)
    var array = data.trim().split(",");
    var total = 0;
    for (var i = 0; i < array.length; i++) {
      total += parseFloat(array[i]);
//
//     }
//       console.log(total);
// })
});
}
//
// else if(){
//
// }
// We then store the textfile filename given to us from the command line


// We then append the contents "Hello Kitty" into the file
// If the file didn't exist then it gets created on the fly.
// fs.appendFile("bank.txt", , function(err) {
//
//   // If an error was experienced we say it.
//   if (err) {
//     console.log(err);
//   }
//
//   // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//   else {
//     console.log("Content Added!");
//   }
//
// });
