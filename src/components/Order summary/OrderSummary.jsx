import React from "react";
import "./OrderSummary.css";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItem = useSelector((state) => state.cart.items);
  const options = Array.from({ length: 500 }, (_, index) => index + 1);
  return (
    <section id="OrderSummary">
      <div className="summaryRow">
        <div className="ShoppingBag">
          <h1>Shopping bag</h1>
          <div className="summaryCards">
          {
            cartItem.map((value,index)=>{
              return(
                <div className="summarycart">
              <div className="summaryImg">
                <img
                  src={value.img}
                  alt={value.name}
                />
              </div>
              <div className="summaryCartDetail">
                <div className="summaryDetail">
                  <h1>{value.name}</h1>
                  <span>60x70, Calligraphy Bird blue</span>
                  <div className="summaryCartBtn">
                    <button className="itemCount">
                    <select className="selectStyle">
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    </button>
                    <div className="summaryLinks">
                    <a href="">Delete</a>
                    <a href="">Save to mood boards</a>
                    </div>
                    <div className="SummaryPrice">
                      <h4 className="Sumprice">{value.price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              )
            })
          }
          </div>
        </div>
        <div className="summaryTotal">
          <div className="totalHead">
            <h3>Order summary</h3>
            <a href="">Need Some Help?</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
