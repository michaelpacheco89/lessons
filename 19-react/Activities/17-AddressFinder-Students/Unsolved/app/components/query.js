// Include React
var React = require("react");
var axios = require("axios");


var Query = React.createClass({
  getInitialState: function() {
    return {
      inputValue: '',
      address: ''
    };
  },

  updateInputValue: function(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  },

  lookup: function(){
    var url = "http://api.opencagedata.com/geocode/v1/json?q=" + this.state.inputValue + "&key=35e5548c618555b1a43eb4759d26b260";

    var self = this;

    axios.get(url).then(function(data){
      self.setState({
        address: data.data.results[0].formatted
      });
    });

  } ,


  render: function() {
    return (
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Query</h3>
          </div>
          <div className="panel-body text-center">
            <form>
              <div className="form-group">
                <h4 className="">
                  <strong>Location</strong>
                </h4>
                {/*
                  Note how each of the form elements has an id that matches the state.
                  This is not necessary but it is convenient.
                  Also note how each has an onChange event associated with our handleChange event.
                */}
                <input
                  type="text"
                  value={this.state.inputValue}
                  className="form-control"
                  id="input"
                  onChange={this.updateInputValue}
                  required

                />
                {/* {this.state.inputValue} */}
              </div>
              <button type="submit" form="form-group" value="Submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Query;
