import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/css/WhoAreWe.css";

function WhoAreWe() {
  return (
    <div>
      <div className="row who">
        <div className="col-3">
          <h2 className="who-title">Biz Kimiz?</h2>
        </div>
        <div className="col-9 ">
          <p className="who-desc">
            Codeck Yazılım olarak kurumların ve bireylerin yaşamlarına dokunup,
            onları bizimle tanıştıkları andan itibaren başka bir hıza ve noktaya
            taşımak için çalışıyoruz. Teknoloji ve Hız bizim gücümüz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;
