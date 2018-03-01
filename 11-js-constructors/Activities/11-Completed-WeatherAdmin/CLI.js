var inquirer = require("inquirer");
var UserSearch = require("./userSearch");
var AdminSearch = require("./weatherAdmin")


function startUp(){
    inquirer.prompt([
        {
          type: "list",
          message: "Choose your view mode",
          choices: ["Admin View", "User View"],
          name: "userview"
        }

    ]).then(function(response){
      if(response.userview === "Admin View"){
        var test = new AdminSearch;
        test.searches(startUp);

      }

      else{
        inquirer.prompt([
          {
          type:"input",
          message: "Enter your name:",
          name: "name"
          },
          {
          type: "input",
          message: "Enter City:",
          name: "city"
          }
        ]).then(function(response){
          var test = new AdminSearch;
          test.newSearch(response.name,response.city, startUp);

        });
      }


    });



};

startUp();
