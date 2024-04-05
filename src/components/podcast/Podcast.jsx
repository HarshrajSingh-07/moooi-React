import React from "react";
import './Podcast.css'
import "../Product-story/Productstory.css";
const Podcast = ({ src, span, btnText, children}) => {
  return (
    <section id="productStory" className="section">
      <div className="left-product">
        <div className="imgsec">
          <img src={src} alt="" />
        </div>
      </div>
      <div className="right-product">
        <div className="rightContent">
          <span>{span}</span>
          <h1>{children}</h1>
          <div className="podcastBtn">
            <a href="#" className="cool-link">
              {btnText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
