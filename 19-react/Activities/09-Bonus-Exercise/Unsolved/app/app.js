// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// We need to include all of the components we"re utilizing
var Jumbo = require("./components/Jumbo");
var Navbar= require("./components/Navbar");
var Footer = require("./components/Footer");

ReactDOM.render(
// Here we dump all of the components into a single main-container
// Again, treat them like they are any other HTML elements.
  <div className="main-container">
    <Jumbo/>
    <Navbar/>
    <Footer/>
  </div>
  , document.getElementById("app")
);
