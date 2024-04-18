import React from "react";
import "./Preloader.css"; // Import CSS file for preloader styles

const Preloader = () => {
  return (
    <section id="Preloader">
      <div id="loop" class="center">
        <div className="loaderHead">
          <h1>moooi</h1>
          {/* <h3>Loading...</h3> */}
        </div>
      </div>
      <div id="bike-wrapper" class="center">
        <div id="bike" class="centerBike"></div>
      </div>
      <div className="loadingText">
        <h3>Loading...</h3>
      </div>
    </section>
  );
};

export default Preloader;
