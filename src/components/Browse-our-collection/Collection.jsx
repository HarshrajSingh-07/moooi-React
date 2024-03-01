import React from "react";
import "../Browse-our-collection/Collection.css";
import "../manu-btn/Manu.css";
import { Link } from "react-router-dom";

const collectionData = [
  {
    src: "assets/images/bedding_-_bath.png",
    title: "Bedding & Bath",
    alt: "Bedding & Bath",
  },
  {
    src: "assets/images/furniture.webp",
    title: "Furniture",
    alt: "Furniture",
  },
  {
    src: "assets/images/lighting.webp",
    title: "Lighting",
    alt: "Lighting",
  },
  {
    src: "assets/images/home_accessories.png",
    title: "Home Accessories",
    alt: "Home Accessories",
  },
  {
    src: "assets/images/wall_-_floor.webp",
    title: "Wall & Floor",
    alt: "Wall & Floor",
  },
  {
    src: "assets/images/body_-_beauty.webp",
    title: "Body & Beauty",
    alt: "Body & Beauty",
  }
];
function Collection() {
  return (
    <section id="collection">
      <div className="container">
      <h3>BROWSE OUR COLLECTION</h3>
      <div style={{width:"100%"}}>
      <div className="card">
          {collectionData.map((item,index) => {
            return (
              <Link to={item.title} key={index}>
              <div className="item">
                <img src={item.src} alt={item.alt} />
                <span>{item.title}</span>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Collection;
