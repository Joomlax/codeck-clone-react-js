import React, { Component } from "react";
import Navbar from "../../components/UnboundComponent/Navbar";
import WhoAreWe from "./WhoAreWe";
import AboutHero from "./AboutHero";
import Customer from "./Customer";
import Brands from "./Brands";
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
