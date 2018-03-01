var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'auction'
});

connection.connect(function(err){
  if(err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  // console.log("connected as id " + connection.threadId);
  startApp();
});


function startApp(){
    inquirer.prompt([
        {
          type: "list",
          message: "Would you like to [POST] an auction or [BID] on an auction?",
          choices: ["POST", "BID"],
          name: "choice"
        }

    ]).then(function(response){
        switch(response.choice){
          case "POST":
            // console.log("you chose POST");
              inquirer.prompt([
                {
                type: "input",
                message: "What item would you like to submit?",
                name: "item"
                },
                {
                type: "input",
                message: "What category would you like to place your auction in?",
                name: "category"
                },
                {
                type: "input",
                message: "What would you like your starting bid to be?",
                name: "starting_bid"
                }
              ]).then(function(response){
                var newPost = {
                  item: response.item,
                  category: response.category,
                  bid: response.starting_bid
                };
                createPost(newPost, startApp);
              });


              break;
          case "BID":
            // console.log("you chose BID ");
            readBid();

              break;
        }
    });

}

function createPost(object, callback){
  console.log("Inserting a post...\n");
  var query = connection.query(
    "INSERT INTO auction_item SET ?",[object], function(err, res) {
      if(err) throw err;
      console.log(res.affectedRows + " post inserted!\n");
      // Call updateSong AFTER the INSERT completes
      callback();
    }
  );
}

function readBid(){
  console.log("Retrieving all items...\n");
  var bidObjects = [];
  var bidItems = [];
  connection.query("SELECT * FROM auction_item", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    // console.log(res);
    for(var i = 0; i < res.length; i++){
      bidItems.push(res[i].item);
    }
    // console.log(bidItems);
    inquirer.prompt([
      {
      type: "list",
      message: "What item would you like to place a bid on?",
      choices: bidItems,
      name: "bidChoice"
      },
      {
      type: "input",
      message: "How much would you like to bid?",
      name: "bidPlaced"
      }
    ]).then(function(response){
        // console.log(response);
      connection.query("SELECT * FROM auction_item WHERE item =?", [response.bidChoice], function(err, result){
          if (err) throw err;
          console.log(result);

          var oldBid = res[0].bid;
          var newBid = response.bidPlaced;
          console.log("NEW BID: " + newBid);
          if(newBid > oldBid){
            console.log("Congrats! You are the highest bidder!");


            connection.query("UPDATE auction_item SET bid = ? WHERE item = ?",[newBid,response.bidChoice],
              function(err, res) {
                console.log(" bid updated!\n");
                // Call deleteSong AFTER the UPDATE completes

              }
            );

          }
          else{
            console.log("That Bid is too low!! Current bid is: " + oldBid + "\n Place another bid");


          }

        });

    });

  });
}
