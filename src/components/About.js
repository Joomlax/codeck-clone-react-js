import React, { Component } from "react";
import Navbar from "../components/Navbar";
import WhoAreWe from "../components/WhoAreWe";
import AboutHero from "../components/AboutHero";
export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <WhoAreWe />
        <AboutHero />
      </div>
    );
  }
}

export default About;
