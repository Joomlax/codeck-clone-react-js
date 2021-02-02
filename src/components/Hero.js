import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/css/Hero.css";
import Space from "../Assets/img/space.svg";
export class Hero extends Component {
  render() {
    return (
      <div className="container">
        <div className="row hero">
          <div className="col-6 hero-text">
            <h2 className="hero-title">Buradayız, </h2>
            <h2 className="hero-yeniyiz">Yeniyiz</h2>
            <h2 className="hero-birlikteyiz">Birlikteyiz.</h2>
            <h4 className="hero-parag">
              Teknolojinin getirdiği imkanları ve kolaylıkları çevremize
              sunabilmek için çalışıyoruz.
            </h4>
          </div>
          <div className="col-6 hero-image">
            <img className="hero-space" src={Space} />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
