var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 7000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "wishesdb"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res){
  connection.query("SELECT * FROM wishes;", function(err, data){
      if (err) throw err;

      res.render("index", { wishes: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // res.send('You sent, ' + req.body.task);

  connection.query("INSERT INTO wishes (wishes) VALUES (?)", [req.body.wishes], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});

app.listen(port);
