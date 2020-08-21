import React, { Component } from "react";
import { Spinner } from "react-bootstrap";

class Callback extends Component {
  render() {
    return (
      <div
        className="feeds-spinner"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Spinner animation="border" variant="success" />{" "}
      </div>
    );
  }
}

export default Callback;
