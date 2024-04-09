import React from "react";
import "./Presents.css";
const Presents = () => {
  return (
    <section id="Presents" className="section">
      <div className="leftPresents">
        <div className="leftContent">
          <span>MOOOI PRESENTS</span>
          <h1>Kissing booth by Moooi X EveryHuman</h1>
          <button className="cool-link">
            Discover this Room Fragrance
          </button>
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
