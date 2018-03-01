				// ===================================================//
				// ====================TIMESHEET======================// 
				// ===================================================//


// *GLOBAL FIREBASE INITIALIZATION
// ===============================
  var config = {
    apiKey: "AIzaSyD5jXMB6DQoOKB6s_KuxmLCDS0KR8Srowo",
    authDomain: "employee-timesheet-f1e32.firebaseapp.com",
    databaseURL: "https://employee-timesheet-f1e32.firebaseio.com",
    projectId: "employee-timesheet-f1e32",
    storageBucket: "",
    messagingSenderId: "967515778695"
  };
  firebase.initializeApp(config);


	var database = firebase.database();
	var months_worked;
	var billed;


// On Click Event
// ===================

$(document).on("click", "#submit-search-info", function(event){
	event.preventDefault();

	// console.log("i've been clicked!");

	//creating variables for informations inputed by user//

	var name = $("#employee-name").val().trim();
	var role = $("#employee-role").val().trim();
	var rate = $("#monthly-rate").val().trim();
	var date = $("#start-date").val().trim();

	var date_format = new Date(date);
	var today = new Date();

	months_worked = (today.getMonth()+1) - (date_format.getMonth()+1);

	billed = months_worked * rate;



// pushing to firebase
// =====================

	database.ref().push({

		name: name,
		role: role,
		rate: rate,
		date: date,
		dataAdded: firebase.database.ServerValue.TIMESTAMP

	});



// alert name was successfully added
// ==================================
	alert("Employee successfully added");


// clear input field
// =====================
	
	$("#employee-name").val("")
	$("#employee-role").val("")
	$("#monthly-rate").val("")
	$("#start-date").val("")



});	

// ================
	
	database.ref().on("child_added", function(snapshot){

	var date_format = new Date(snapshot.val().date);
	var today = new Date();

	months_worked = (today.getMonth() + 1) - (date_format.getMonth()+1);

	billed = months_worked * snapshot.val().rate;	


	var newRow = $("<tr>");
	newRow.append("<td>" + snapshot.val().name + "</td>" );
	newRow.append("<td>" + snapshot.val().role + "</td>" );
	newRow.append("<td>" + snapshot.val().date + "</td>" );
	newRow.append("<td>" + months_worked + "</td>" );
	newRow.append("<td>" + snapshot.val().rate + "</td>" );
	newRow.append("<td>" + billed + "</td>" );
		
		console.log(snapshot.val());



});





















