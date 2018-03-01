var React = require("react");

// This is the Child component
var Grandchild = React.createClass({

  // Here we describe our component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Child</h3>
        </div>
        <div className="panel-body text-center">
          {this.props.clicks*4}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Grandchild;
