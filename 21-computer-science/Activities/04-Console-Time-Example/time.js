// make array of random numbers
var arraySize = 5000;
var array = [];

for (var i = 0; i < arraySize; i++) {
	array.push(Math.round(Math.random() * arraySize));
}

// random value to find
var findMe = array[Math.ceil(Math.random() * arraySize)];

// benchmark regular search
console.time("regular");

for (var i = 0; i < array.length; i++) {
	if (findMe === array[i]) {
  		console.log("found it");
  }
}

console.timeEnd("regular");

// benchmark optimized search
console.time("optimized");

// cache array length
for (var i = 0, len = array.length; i < len; i++) {
	if (findMe === array[i]) {
	  	console.log("found it");

	  	// we found it, so don't need to keep looking
	    break;
  }
}

console.timeEnd("optimized");