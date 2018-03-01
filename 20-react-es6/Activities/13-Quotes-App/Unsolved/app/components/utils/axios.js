// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper Functions (in this case the only one is runQuery)
var Axios = {
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Returns a promise object we can .then() off inside our Parent component
  deleteQuote: function() {
    return axios.delete("/api/quotes:id");
  },
  // Also returns a promise object we can .then() off inside our Parent component
  // This method takes in an argument for what to post to the database
  saveQuote: function(data) {
    console.log("SAVE QUOTE");
    return axios.post("/api/quotes", data);
  },
  updateQuote: function(){
    return axios.patch("/api/quotes/:id");
  }

};

// We export the Axios function (which contains getGithubInfo)
module.exports = Axios;
