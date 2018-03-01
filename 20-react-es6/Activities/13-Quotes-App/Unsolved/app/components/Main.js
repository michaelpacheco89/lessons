import React from "react";
import ListContainer from "./ListContainer";
// very basic component to get started
const Main = () => (
  <div style={styles.containerStyle} className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <ListContainer />
      </div>
    </div>
  </div>
);

const styles = {
  containerStyle: {
    marginTop: 50,
    textAlign: "center"
  }
};

export default Main;
