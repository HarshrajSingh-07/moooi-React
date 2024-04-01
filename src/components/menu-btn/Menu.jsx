import React from "react";
import "./Menu.css"

function Menu({handleShow}) {
  return (
    <section>
      <div className="MenuItem">
        <div className="innerBtn">
          <button onClick={()=>{handleShow()}}>
            <img src="assets/images/Menu-button.png" alt="" />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
