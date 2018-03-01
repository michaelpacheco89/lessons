import React from "react";

class CounterDisplay extends React.Component {

  // Write code here to render some JSX that displays "this.props.count"

  render() {
    return (
      <h1>{this.props.count}</h1>
    )
  }
}

export default CounterDisplay;
