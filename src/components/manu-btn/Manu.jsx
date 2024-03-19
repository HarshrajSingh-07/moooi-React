import React from "react";
import "../manu-btn/Manu.css";


function Manu({handleShow}) {
  return (
    <section>
      <div className="manuItem">
        <div className="innerBtn">
          <button onClick={()=>{handleShow()}}>
            <img src="assets/images/manu-button.png" alt="" />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Manu;
