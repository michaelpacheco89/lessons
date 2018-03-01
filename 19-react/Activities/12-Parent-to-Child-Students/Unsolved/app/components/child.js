// Include React
var React = require("react");
var Grandchild = require("./grandchild");
// This is the Child component
var Child = React.createClass({

  // Here we describe our component's render method
  render: function() {
    return (

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Child</h3>
          </div>
          <div className="panel-body text-center">
            {this.props.clicks*2}
            <Grandchild clicks={this.props.click*2}/>
          </div>
        </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Child;
