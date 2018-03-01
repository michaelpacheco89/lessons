// Initialize Firebase (YOUR OWN APP)

  var config = {
    apiKey: "AIzaSyDHBPVphHjZyuMhBVswYxLrKda51jnwha8",
    authDomain: "first-firebase-project-cdd27.firebaseapp.com",
    databaseURL: "https://first-firebase-project-cdd27.firebaseio.com",
    projectId: "first-firebase-project-cdd27",
    storageBucket: "first-firebase-project-cdd27.appspot.com",
    messagingSenderId: "860114293605"
  };
  firebase.initializeApp(config);



// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

var database = firebase.database();

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
	database.ref().on("value", function(snapshot) {

	

// Print the initial data to the console.
	console.log(snapshot.val());

// Change the html to reflect the initial value.
	$("#click-value").html(initialValue);

// Change the clickCounter to match the data in the database
	clickCounter= snapshot.val().clickCount;

// Log the value of the clickCounter
	console.log(clickCounter);

// Change the HTML Value
	

// If any errors are experienced, log them to console.

// --------------------------------------------------------------
})
// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1


  // Alert User and reset the counter


  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
