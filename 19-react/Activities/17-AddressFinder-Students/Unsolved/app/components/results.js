// Include React
var React = require("react");
var Results = React.createClass({

  render: function() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Results</h3>
          </div>
          <div className="panel-body text-center">
            <form>
              <div className="form-group">
                <h2>
                  Address:
                  {this.props.address}
                </h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
