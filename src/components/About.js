import React, { Component } from "react";
import Navbar from "../components/Navbar";
import WhoAreWe from "../components/WhoAreWe";
import AboutHero from "../components/AboutHero";
import Customer from "../components/Customer";
import Brands from "../components/Brands";
export class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <WhoAreWe />
        <AboutHero />
        <Customer />
        <Brands />
      </div>
    );
  }
}

export default About;
