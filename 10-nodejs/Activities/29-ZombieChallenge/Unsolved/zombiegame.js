// INSTRUCTIONS: Build a command-line based zombie fighting game.
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5.
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again.

// The game ends when you or the zombie gets to 0 health.

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your propmt.

// ===========================================================================================================

var inquirer = require("inquirer");
var userHP = 70;
var zombieHP = 20;
var alive = true;

function keepGoing(){
		inquirer
		.prompt([
		// Here we create a basic text prompt.
		{
		type: "list",
		message: "Try to stay alive! Guess a number between [1-5]",
		choices: ["1","2","3","4","5"],
		name: "userChoice"
		},
		]).then(function(inquirerResponse) {

			var zombieChoice = Math.floor(Math.random() * 5) + 1;
			var zombieHit = Math.floor(Math.random() * 5) + 1;
			var userHit = Math.floor(Math.random() * 10) + 1;

			if(parseInt(inquirerResponse.userChoice) === zombieChoice){

				console.log("You hit the zombie!");
				zombieHP-=userHit;

			}
			else{
				console.log("Oh no! The zombie slashed you!");
				userHP-=zombieHit;

			}

			if(userHP <= 0){
				console.log("You died!")
			}
			else if(zombieHP <= 0){

				console.log("You killed the zombie!");

			}
			else{

				console.log("Your health: " + userHP);
				console.log("Zombie health: " + zombieHP);
				keepGoing(alive);

			}

		});
}

keepGoing();
