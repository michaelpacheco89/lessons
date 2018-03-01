var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
  if(error){
    console.log('error');
  };


  var array = data.split(",");


  // console.log(array);

  for(var i = 0; i < array.length; i++){
  console.log(array[i]);
}
})
