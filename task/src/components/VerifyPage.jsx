import React, { Component } from "react";
import Navbar from "./Navbar";
import VerifyBody from "./VerifyBody";

class VerifyPage extends Component {
  render() {
    return (
      <div className="verifyPage">
        <Navbar />
        <VerifyBody />
      </div>
    );
  }
}

export default VerifyPage;
