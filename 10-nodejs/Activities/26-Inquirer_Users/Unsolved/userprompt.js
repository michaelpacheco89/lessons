// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ============

var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What's your name?",
      name: "username",
    },
    {
      type: "confirm",
      message: "Is that your real name??",
      name: "confirm",
      default: "true",
    },
    {
        type: "password",
        message: "Set your password",
        name: "password",
    },
    {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
    },
    {
      type: "checkbox",
      name: "favGenre",
      message: "Check your favorite music genre",
      choices: [
        {
          name: "Rap",
        },
        {
          name: "Rock",
        },
        {
          name:"Classical",
        },
        {
          name: "Country",
        },
    ]},
    {
      type:"list",
      message: "If you won the lottery, what would you do?",
      choices: ["Take 20million now", "Take 20k a month for life", "Donate to Charity"],
      name: "lotto",
    }
  ])

  .then(function(userResponse){
      if(userResponse.confirm){
        console.log("\nWelcome" + userResponse.username);
      }
      else{
        console.log("Tell me your name!!")
      }

      if(userResponse.choices[0] && userResponse.choices[1]){
        console.log ("greedy!!")
      }
      else {
        console.log("you are kind")
      }
  });
