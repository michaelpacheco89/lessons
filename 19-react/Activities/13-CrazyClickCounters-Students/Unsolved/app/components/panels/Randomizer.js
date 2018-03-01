// Include React
var React = require("react");

// Create the Randomizer Component
var Randomizer = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Randomizer</h3>
        </div>
        <div className="panel-body text-center">

          <h1>{this.props.clicks * (Math.floor(Math.random() * 10) + 1)}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Randomizer;
