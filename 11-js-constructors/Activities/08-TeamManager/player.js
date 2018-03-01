var inquirer = require('inquirer');

function Player(name, position, offense, defense, isStarter) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
  this.isStarter = true;

  this.goodGame = function() {
    if (Math.round(Math.random()) === 1) {
      this.offense++;
    } else {
      this.defense++;
    }
  };

  this.badGame = function() {
    if (Math.round(Math.random()) === 1) {
      this.offense--;
    } else {
      this.defense--;
    }
  };

  this.printStats = function() {
    console.log(this.name + "\n" + this.position + "\n" + this.offense + "\n" + this.defense);

  }






};

var john = new Player("john", "forward", 3, 4);
john.printStats();



var playersArray = [];


var addPlayer = function() {
  if (playersArray.length < 8) {
    inquirer.prompt([{
        name: "name",
        message: "What is your name?"
      },
      {
        name: "position",
        message: "What position do you play?",
      },
      {
        type: "list",
        message: "How good is your offense??",
        choices: ["1", "2", "3", "4", "5"],
      },
      {
        type: "list",
        message: "How good is your defense??",
        choices: ["1", "2", "3", "4", "5"],
      },
    ]).then(function(response) {

      var newPlayer = new Player(
        response.name
        response.position
        response.offensive
        responsive.defensive);
        for(var i = 0; i < playersArray.length; i++){
          if(i > 4){
            Player.isStarter=false;
          }
        }






    })
  }
}
