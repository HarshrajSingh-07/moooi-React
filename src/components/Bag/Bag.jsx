import React from "react";
import "./Bag.css";
import { IoMdSearch } from "react-icons/io";
import { BsGrid1X2 } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
 totalPriceHandler,
} from "../Redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Bag = ({ isBagOpen, toggleBag }) => {

  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.items);

  const subtotal = cartItem.reduce((acc, item) => {
    return +acc + item.price * item.quantity;
  }, 0);
  
  dispatch(totalPriceHandler(subtotal));


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
            {cartItem.map((value, index) => (
              <div className="bagCards" key={index}>
                <div className="bagImg" key={index}>
                  <img src={value.img} alt="" />
                </div>
                <div className="bagDetails">
                  <p>{value.quantity}x {value.name}</p>
                  <span>60x70, Calligraphy Bird blue</span>
                </div>
                <div className="bagprice">{(value.price * value.quantity)}</div>
              </div>
            ))}
          </div>
          <div className="bagFooter">
            <div className="subtotal">
              <p>SUBTOTAL</p>
              <span>${subtotal}</span>
            </div>
            <div className="bagButtons">
              <Link to="/ordersummary">
                <button onClick={toggleBag}>View Bag</button>
              </Link>
              <Link to="/collection">
                <button className="CheackBtn" onClick={toggleBag}>Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bag;
