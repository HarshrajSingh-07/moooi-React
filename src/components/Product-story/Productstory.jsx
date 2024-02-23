import React from "react";
import "./Productstory.css";
const product = () => {
  return (
    <section id="productStory">
      <div className="left-product">
        <div className="imgsec">
          <img src="../../assets/images/image.webp" alt="" />
        </div>
      </div>
      <div className="right-product">
        <div className="rightContent">
          <span>product story</span>
          <h1>Hana Chair - Versatility & Customisable</h1>
          <div className="productBtn">
            <button>Discover the Hana Chair family</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default product;
