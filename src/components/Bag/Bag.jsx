import React, { useEffect, useRef } from "react";
import "./Bag.css";
import { IoMdSearch } from "react-icons/io";
import { BsGrid1X2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { totalPriceHandler } from "../Redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Bag = ({ isBagOpen, toggleBag }) => {
  const dispatch = useDispatch();
  const buyDetailRef = useRef(null); // Create a ref for the BuyDetail element
  const buyDetail = document.getElementById("BuyDetail");
  const cartItem = useSelector((state) => state.cart.items);
  useEffect(() => {
    const Bag = document.getElementById("Bag");
    if (isBagOpen) {
      Bag.style.transform = "translateX(0%)";
      document.body.style.overflow = "hidden"; // Stop scroll
    } else {
      Bag.style.transform = "translateX(120%)";
      document.body.style.overflow = "auto"; // Restore scroll
    }
    // Clean up function to reset styles when component unmounts or isBagOpen changes
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.filter = "none";
    };
  }, [isBagOpen]);

  const subtotal = cartItem.reduce((acc, item) => {
    return +acc + item.price * item.quantity;
  }, 0);

  dispatch(totalPriceHandler(subtotal));
  return (
    <>
      <section id="Bag">
        <div className={isBagOpen ? "bagContainer" : "bagContainer__close"}>
          <div className="bagnavbarIcons">
            <div className="bagHeadIcons">
              <IoMdSearch />
              <BsGrid1X2 />
            </div>

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
          </div>
          <div className="BagHeader">
            <h1>Bag</h1>
          </div>
          <div className="cartcards">
            {cartItem.length === 0 ? (
              <div className="emptyBag">
                <h1> -- No Items in Bag -- </h1>
                <p>No items in your cart yet. Start shopping!</p>
              </div>
            ) : (
              cartItem.map((value, index) => (
                <div className="bagCards" key={index}>
                  <div className="bagImg" key={index}>
                    <img src={value.img} alt="" />
                  </div>
                  <div className="bagDetails">
                    <p>
                      {value.quantity}x {value.name}
                    </p>
                    <span>60x70, Calligraphy Bird blue</span>
                  </div>
                  <div className="bagprice">
                    ${value.price * value.quantity}
                  </div>
                </div>
              ))
            )}
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
                <button className="CheackBtn" onClick={toggleBag}>
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bag;
