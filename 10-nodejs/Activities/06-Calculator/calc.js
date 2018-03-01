var terminal = process.argv[2];
var a = process.argv[3];
var b = process.argv[4];




if(terminal === "add"){
	console.log(parseFloat(a) + parseFloat(b));
}

if(terminal === "subtract"){
	console.log(parseFloat(a) - parseFloat(b));
}

if(terminal === "multiply"){
	console.log(parseFloat(a) * parseFloat(b));
}

if(terminal === "divide"){
	console.log(parseFloat(a) / parseFloat(b));
}

if(terminal === "algebra"){
	
}