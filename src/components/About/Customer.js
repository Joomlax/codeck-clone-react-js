import React, { Component } from "react";
import "../../Assets/css/Show.css";
import Tvekstra from "../../Assets/img/tvekstra.svg";
import Amvg from "../../Assets/img/amvg.svg";
import Bmsumer from "../../Assets/img/bmsumer.png";
import AkilliAhtapot from "../../Assets/img/akilliahtapot.svg";
import USdanis from "../../Assets/img/us-danis-logo.svg";
import Pryapim from "../../Assets/img/pryapim.svg";
import Kafeinbox from "../../Assets/img/kafeinbox.svg";
import Ungo from "../../Assets/img/unogo-logo.png";
import Dogaldede from "../../Assets/img/dogaldede-logo.png";
import Atakan from "../../Assets/img/atakan-logo.svg";
import ArtiSaglik from "../../Assets/img/arti-saglik.svg";
import Udef from "../../Assets/img/udef-logo.svg";

export class Show extends Component {
  render() {
    return (
      <div className="show">
        <div className="row">
          <div className="col-4 show-description">
            <h2 className="show-title">Müşterilerimiz</h2>
            <h2 className="show-desc">
              Birlikte çalışmaktan mutluluk duyduğumuz müşterilerimiz.
            </h2>
          </div>

          <div className="col-8">
            <div className="row show-logos">
              <div className="col-3">
                <img className="show-logo" src={Tvekstra} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={Amvg} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={Bmsumer} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={AkilliAhtapot} alt="logo" />
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <img className="show-logo" src={USdanis} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={Pryapim} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={Kafeinbox} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={Ungo} alt="logo" />
              </div>
            </div>

            <div className="row">
              <div className="col-3">
                <img className="show-logo" src={Dogaldede} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={Atakan} alt="logo" />
              </div>
              <div className="col-3">
                <img className="show-logo" src={Udef} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
