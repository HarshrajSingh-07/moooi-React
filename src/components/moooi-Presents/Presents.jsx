import React from "react";
import "./Presents.css";
const Presents = () => {
  return (
    <section id="Presents">
      <div className="leftPresents">
        <div className="leftContent">
          <span>MOOOI PRESENTS</span>
          <h1>Kissing booth by Moooi X EveryHuman</h1>
          <a className="cool-link" href="#">Discover this Room Fragrance</a>
        </div>
      </div>
      <div className="rightPresents">
        <img
          src="../../assets/images/fregrance.webp"
          alt="moooi presents - Fregrance"
        />
      </div>
    </section>
  );
};

export default Presents;
