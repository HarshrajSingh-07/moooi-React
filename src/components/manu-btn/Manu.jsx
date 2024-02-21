import React from "react";
import "../manu-btn/Manu.css";

function Manu() {
  return (
    <div className="manuItem">
      <div className="innerBtn">
      <button>
        <img src="assets/images/manu-button.png" alt="" />
        <span>Manu</span>
      </button>
      </div>
    </div>
  );
}

export default Manu;
