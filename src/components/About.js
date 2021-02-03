import React, { Component } from "react";
import Navbar from "../components/Navbar";
import WhoAreWe from "../components/WhoAreWe";
import AboutHero from "../components/AboutHero";
import Show from "../components/Show";
export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <WhoAreWe />
        <AboutHero />
        <Show />
      </div>
    );
  }
}

export default About;
