import React, { Component } from "react";
import Navbar from "../components/Navbar";
import WhoAreWe from "../components/WhoAreWe";
export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <WhoAreWe />
      </div>
    );
  }
}

export default About;
