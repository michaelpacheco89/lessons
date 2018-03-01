// Dependencies
var express = require("express");
var bodyParser = require('body-parser');


// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:num1/:num2", function(req, res) {

  var operation = req.params.operation;
  var num1 = req.params.num1;
  var num2 = req.params.num2;

// =====functions=====
function add(num1, num2){
  return parseFloat(num1) + parseFloat(num2);
}

function subtract(num1, num2){
  return parseFloat(num1) - parseFloat(num2);
}

function multiply(num1, num2){
  return parseFloat(num1) * parseFloat(num2);
}

function divide(num1, num2){
  return parseFloat(num1) / parseFloat(num2);
}


  // TODO parse out the variables from the request

    console.log(id);
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      // Add your logic here. Pun intended.
        result = add();
      break;
    case "subtract":
      // Subtract logic
      result = subtract();
      break;
    case "multiply":
      // Multiply
      result = multiply();
      break;
    case "divide":
      // Divide
      result = divide();
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
