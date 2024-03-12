import React from "react";
import "./Bag.css";
import { IoMdSearch } from "react-icons/io";
import { BsGrid1X2 } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
const Bag = ({ isBagOpen, toggleBag }) => {
  const cartItem = useSelector((state) => state.cart.items);
  console.log(cartItem);

  if (isBagOpen) {
    document.body.style.overflowY = "hidden"; // Disable horizontal scrolling
    document.body.classList.add("menu-blur");
  } else {
    document.body.style.overflowY = "auto"; // Enable horizontal scrolling
    document.body.classList.remove("menu-blur");
  }
  return (
    <>
      <section id="Bag">
        <div className={isBagOpen ? "bagContainer" : "bagContainer__close"}>
          <div className="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              onClick={toggleBag}
            >
              <defs />
              <path d="M26 0h12v64H26z" />
              <path d="M0 38V26h64v12z" />
            </svg>
          </div>
          <div className="BagHeader">
            <h1>Bag</h1>
            <div className="bagIcons">
              <IoMdSearch />
              <BsGrid1X2 />
              <FiShoppingBag />
            </div>
          </div>
          <div className="cartcards">
          {cartItem.map((value, index) => {
            return (
              <>
                <div className="bagCards" key={index}>
                  <div className="bagImg">
                    <img src={value.img} alt="" />
                  </div>
                  <div className="bagDetails">
                    <p>3 x {value.name}</p>
                    <span>60x70, Calligraphy Bird blue</span>
                  </div>
                  <div className="bagprice">{value.price}</div>
                </div>
              </>
            );
          })}</div>
          <div className="subtotal">
            <p>SUBTOTAL</p>
            <span>$7656</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bag;
