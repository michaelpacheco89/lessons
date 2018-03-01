// Server routes
// =============

// Bring headlines and notes from the controller
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router) {
  // This route renders the homepage
  router.get("/", function(req, res) {
    res.render("home");
  });

  // This route renders the saved handledbars page
  router.get("/saved", function(req, res) {
    res.render("saved");
  });

  // This route handles scraping more articles to add to our db
  router.get("/api/fetch", function(req, res) {
    // This method inside the headlinesController will try and scrap new articles
    // and save unique ones to our database
    headlinesController.fetch(function(err, docs) {
      // If we don't get any articles back, likely because there are no new
      // unique articles, send this message back to the user
      if (!docs || docs.insertedCount === 0) {
        res.json({
          message: "No new articles today. Check back tomorrow!"
        });
      }
      else {
        // Otherwise send back a count of how many new articles we got
        res.json({
          message: "Added " + docs.insertedCount + " new articles!"
        });
      }
    });
  });

  // This route handles getting all headlines from our database
  router.get("/api/headlines", function(req, res) {
    // Run the headlinesController get method and pass in whether we want saved, unsaved,
    // (or all headlines by default)
    headlinesController.get(req.query, function(data) {
      // Send the article data back as JSON
      res.json(data);
    });
  });

  // This route handles deleting a specified headline
  router.delete("/api/headlines/:id", function(req, res) {
    // Set the _id property of the query object to the id in req.params
    var query = { _id: req.params.id };

    // Run the headlinesController delete method and pass in our query object containing
    // the id of the headline we want to delete
    headlinesController.delete(query, function(err, data) {
      // Send the result back as JSON to be handled client side
      res.json(data);
    });
  });

  // This route handles updating a headline, in particular saving one
  router.put("/api/headlines", function(req, res) {
    // Construct a query object to send to the headlinesController with the
    // id of the headline to be saved

    // We're using req.body here instead of req.params to make this route easier to
    // change if we ever want to update a headline in any way except saving it

    headlinesController.update(req.body, function(err, data) {
      // After completion, send the result back to the user
      res.json(data);
    });
  });

  // This route handles getting notes for a particular headline id
  router.get("/api/notes/", function(req, res) {
    // Get all notes
    notesController.get({}, function(err, data) {
      // Send the note data back to the user as JSON
      res.json(data);
    });
  });

  // This route handles getting notes for a particular headline id
  router.get("/api/notes/:headline_id", function(req, res) {
    var query = { _id: req.params.headline_id };

    // Get all notes that match our query using the notesController get method
    notesController.get(query, function(err, data) {
      // Send the note data back to the user as JSON
      res.json(data);
    });
  });

  // This route handles deleting a note of a particular note id
  router.delete("/api/notes/:id", function(req, res) {
    var query = { _id: req.params.id };

    // Use the check function from the headlines controller,
    // this checks all of our articles, sorted by id number
    notesController.delete(query, function(err, data) {
      // Send the article data to a json
      res.json(data);
    });
  });

  // This route handles saving a new note
  router.post("/api/notes", function(req, res) {
    notesController.save(req.body, function(data) {
      // Send the note to the browser as a json
      res.json(data);
    });
  });
};
