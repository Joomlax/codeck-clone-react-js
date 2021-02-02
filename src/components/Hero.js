import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/css/Hero.css";
import Space from "../Assets/img/space.svg";
export class Hero extends Component {
  render() {
    return (
      <div className="row hero">
        <div className="col-6 hero-text">
          <h1 className="hero-title">Buradayız, </h1>
          <h1 className="hero-yeniyiz">Yeniyiz</h1>
          <h1 className="hero-birlikteyiz">Birlikteyiz.</h1>
          <h4 className="hero-parag">
            Teknolojinin getirdiği imkanları ve kolaylıkları çevremize
            sunabilmek için çalışıyoruz.
          </h4>
        </div>
        <div className="col-6 hero-image">
          <img className="hero-space" src={Space} alt="space animation" />
        </div>
      </div>
    );
  }
}

export default Hero;
