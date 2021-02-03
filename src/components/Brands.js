import React from "react";
import "../Assets/css/Brands.css";
import Gitmeden from "../Assets/img/gitmeden-logo.svg";
import Podbia from "../Assets/img/podbia.svg";
import Kafeinbox from "../Assets/img/kafeinbox.svg";
import Iciniz from "../Assets/img/iciniz-logo.svg";
import Musavir from "../Assets/img/musavir-logo.svg";
import Coready from "../Assets/img/coready-logo.svg";
import Burada from "../Assets/img/burada-logo.svg";

function Brands() {
  return (
    <div className="brands">
      <div className="row">
        <div className="col-4 brands-description">
          <h2 className="brands-title">Markalar</h2>
          <h2 className="brands-desc">
            Ortak ve Sahibi Olduğumuz Markalarımız
          </h2>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-3">
              <img className="brands-logo" src={Gitmeden} alt="logo" />
            </div>
            <div className="col-3">
              <img className="brands-logo" src={Podbia} alt="logo" />
            </div>
            <div className="col-3">
              <img className="brands-logo" src={Kafeinbox} alt="logo" />
            </div>
            <div className="col-3">
              <img className="brands-logo" src={Iciniz} alt="logo" />
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <img className="brands-logo" src={Musavir} alt="logo" />
            </div>
            <div className="col-3">
              <img className="brands-logo" src={Coready} alt="logo" />
            </div>
            <div className="col-3">
              <img className="brands-logo" src={Burada} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
