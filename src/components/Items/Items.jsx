import React, { useEffect, useState } from "react";
import "./Item.css";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BsFilterRight } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

const Items = ({ cardItem, obj }) => {
  const [targetIndex, setTargetIndex] = useState(0);

  const pageHandlerBtn = (e) => {
    const index = parseInt(e.target.value, 10);
    setTargetIndex(index);
  };

  return (
    <section id="items">
      <div className="items-head">
        <div className="item-text">
          <h1>{obj.title}</h1>
          <p>Our collection contains work from emerging talent and internationally recognized designers. Together, we create A Life Extraordinary.</p>
        </div>
        <div className="itemsBtn">
          <button className="arow">
            <HiOutlineChevronLeft />
          </button>
          {
            obj.btn.map((item, index) => (
            <button
              key={index}
              className={index === targetIndex ? "active" : null}
              value={index}
              onClick={(e) => pageHandlerBtn(e)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="filterBtn">
          <button>
            <span>
              <BsFilterRight />
            </span>
            <p>Filters</p>
          </button>
        </div>
      </div>

      <div className="cards">
        {cardItem.map((item, index) => (
          <div key={index} className="carditem">
            <div className="cartimg">
              <img src={item.src} alt={item.itemname} />
            </div>
            <div className="cartText">
              <h4>
                {item.itemname}
                <strong className="strong">BY MOOOI</strong>
              </h4>
              <span className="availability">{item.price}</span>
              <span className="availability">{item.availability}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Items;
