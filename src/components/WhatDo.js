import React, { Component } from "react";
import "../Assets/css/WhatDo.css";
export class WhatDo extends Component {
  render() {
    return (
      <div>
        <h4 className="what-title">Neler yapıyoruz?</h4>
        <ul className="what-categories">
          <li className="what-categorie">
            <a href="/#">Web</a>
          </li>
          <li className="what-categorie">
            <a href="/#">Mobil</a>
          </li>
          <li className="what-categorie">
            <a href="/#">Grafik Tasarım</a>
          </li>
        </ul>
        <h4 className="what-title2">Projelerimiz</h4>
      </div>
    );
  }
}

export default WhatDo;
