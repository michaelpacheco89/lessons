var mysql = require("mysql");
var command = process.argv[2];

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jsconnect'
});

connection.connect(function(err){
  if(err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  startApp();
});

function startApp(){
// *switch case to take in user command.
switch(command) {
    case "create":
      createSong();
        break;
    case "read":
      readSong();
        break;
    case "update":
      updateSong();
        break;
    case "delete":
      deleteSong();
        break;

}



  connection.query("SELECT * FROM song", function (error, results, fields) {
  if (error) throw error;

  for (var i = 0; i < results.length; i++){
  console.log(results[i].artist+ " sings the song " + results[i].title);
  }
});
}









// *CRUD ~ ~ CREATE, READ, UPDATE, DELETE

// *create
function createSong(){
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO song SET ?",
    {
      title : "never gonna give you up",
      artist : "rick astley",
      genre : "pop"
    },
    function(err, res) {
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateSong AFTER the INSERT completes

    }
  );
}

// *read
function readSong(){
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM song", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

// *update
function updateSong(){
  console.log("Updating song...\n");
  var query = connection.query(
    "UPDATE song SET ? WHERE ?",
    [
      {
        artist: "gloria gayor",
        title: "i will survive",
        genre: "disco"
      },
      {
        artist: "whoever"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteSong AFTER the UPDATE completes

    }
);
}

// *delete
function deleteSong(){
  console.log("DELETING THE TRUTH BY ALIAS");
  connection.query(
    "DELETE FROM song WHERE ?",
    {
      artist: "alias"
    },
    function(err, res) {
      console.log(res.affectedRows + " song deleted!\n");
      // Call readSong AFTER the DELETE completes

    }
  );

}












// connection.end();  will terminate connection to host. you can set a timeout if needed.
