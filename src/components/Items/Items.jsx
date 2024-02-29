import React from "react";
import "./Item.css";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BsFilterRight } from "react-icons/bs";
const Items = () => {
  return (
    <section id="items">
      <div className="items-head">
        <div className="item-text">
          <h1>Bedding & bath</h1>
          <p>
            Our collection contains work from emerging talent and
            internationally recognized designers. Together, we create A Life
            Extraordinary.
          </p>
        </div>
        <div className="itemsBtn">
          <button className="arow">
            <HiOutlineChevronLeft />
          </button>
          <button className="active">All Bedding & Bath</button>
          <button>Bath</button>
          <button>Bedding</button>
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

      {/* <div className="cart">
        <div className="cartItem">
          <div className="cartimg">
            <img src="../../assets/images/item1.png" />
          </div>
          <div className="cartText">
            <h4>Menagerie of Extinct Animals Bed Scarf XL <span>By MOOOI</span></h4>
            <span>price</span>
            <span>in stocks</span>
          </div>
        </div>
        <div className="cartItem">
          <div className="cartimg">
            <img src="../../assets/images/item1.png" />
          </div>
          <div className="cartText">
            <h4>Menagerie of Extinct Animals Bed Scarf XL <span>By MOOOI</span></h4>
            <span>price</span>
            <span>in stocks</span>
          </div>
        </div>
        <div className="cartItem">
          <div className="cartimg">
            <img src="../../assets/images/item1.png" />
          </div>
          <div className="cartText">
            <h4>Menagerie of Extinct Animals Bed Scarf XL <span>By MOOOI</span></h4>
            <span>price</span>
            <span>in stocks</span>
          </div>
        </div>
      </div> */}
      <div class="cards">
  <div class="card">ONE</div>
  <div class="card">TWO</div>
  <div class="card">THREE</div>
  <div class="card">FOUR</div>
  <div class="card">FIVE</div>
  <div class="card">SIX</div>
  <div class="card">SEVEN</div>
  <div class="card">EIGHT</div>
  <div class="card">NINE</div>
  <div class="card">TEN</div>
  <div class="card">ELEVEN</div>
  <div class="card">TWELVE</div>
</div>

    </section>
  );
};

export default Items;
