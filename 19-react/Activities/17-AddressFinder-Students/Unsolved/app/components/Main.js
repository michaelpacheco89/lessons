// Include React
var React = require("react");
var Query = require("./query.js");
var Results = require("./results.js");
// This is the main component
var Main = React.createClass({
  // Here we set the initial state of our component
  getInitialState: function() {
    return { message: "Hello World" };
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron" textAlign="center">
            <h2>Address Finder</h2>
            <p>
              <em>Enter a landmark to search for its exact address(ex: "Eiffel Tower").</em>
            </p>
          </div>
          <Query />
          <Results />
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
