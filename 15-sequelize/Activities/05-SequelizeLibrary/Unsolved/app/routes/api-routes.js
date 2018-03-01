// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll({})
    .then(function(result){
      return res.json(result);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    var cmd = req.params.book;
    Book.findAll({
      where:{
        title: cmd
      }
    }).then(function(result){
      res.json(result);
    });
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    var cmd = req.params.genre;
    Book.findAll({
      where:{
        genre: cmd
      }
    }).then(function(result){
      return res.json(result);
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    var cmd = req.params.author;
    Book.findAll({
      where:{
        author: cmd
      }
    }).then(function(result){
      return res.json(result);
    });
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    Book.findAll({
      where:{
        pages:{ $gte: 150}
      },
      order: [["pages", "DESC"]]
    }).then(function(results){
      res.json(results);
    });
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    Book.findAll({
      where:{
        pages:{ $lt: 150}
      },
      order: [["pages", "ASC"]]
    }).then(function(results){
      res.json(results);
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    var book = req.body;

    var routeName = book.title.replace(/\s+/g, "").toLowerCase();
    Book.create({
      routeName: routeName,
      tite: book.title,
      author: book.author,
      genre: book.genre,
      pages: book.pages
    }).then(function(results){
      res.send("added");
    });
  });

  // Add sequelize code to delete a book
  app.post("/api/delete", function(req, res) {
    Book.destroy({
      where:{
        title: req.body.id
      }
    }).then(function(results){
      res.send("deleted");
    });
  });

};
