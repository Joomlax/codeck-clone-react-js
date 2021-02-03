import React from "react";
import "../Assets/css/AboutHero.css";
import Boy from "../Assets/img/boyimg.png";

function AboutHero() {
  return (
    <div className="abouthero">
      <div className="abouthero-info">
        <a className="" href="/#">
          Daha Fazla Bilgi
        </a>
      </div>

      <img src={Boy} alt="Boy" />
    </div>
  );
}

export default AboutHero;
