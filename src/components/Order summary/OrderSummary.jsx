import React from "react";
import "./OrderSummary.css";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  totalPriceHandler,
} from "../Redux/features/cart/cartSlice";
import { MdAdd } from "react-icons/md";
import { HiMinusSm } from "react-icons/hi";

const OrderSummary = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrease = (itemName) => {
    dispatch(increaseQuantity(itemName));
  };

  const handleDecrease = (itemName) => {
    dispatch(decreaseQuantity(itemName));
  };

  // Calculate subtotal based on items in the cart
  const subtotal = cartItem.reduce((acc, item) => {
    console.log(item.price,item.quantity);
    return +acc + item.price * item.quantity;
  }, 0);
  dispatch(totalPriceHandler(subtotal));
// console.log("total price",totalPrice);
  return (
    <section id="OrderSummary">
      <div className="summaryRow">
        <div className="ShoppingBag">
          <h1>Shopping bag</h1>
          <div className="summaryCards">
            {cartItem.map((value, index) => (
              <div className="summarycart" key={index}>
                <div className="summaryImg">
                  <img
                    className="sum__img"
                    src={value.img}
                    alt={value.name}
                  />
                </div>
                <div className="summaryCartDetail">
                  <div className="summaryDetail">
                    <h1>
                      {value.quantity}
                      <RxCross2 className="crossQty" />
                      {value.name}
                    </h1>
                    <span>60x70, Calligraphy Bird blue</span>
                    <div className="summaryCartBtn">
                      <div className="itemCount">
                        <div
                          className="increaseQty"
                          onClick={() => handleDecrease(value.name)}
                        >
                          <HiMinusSm />
                        </div>
                        <div className="CurrentQty">{value.quantity}</div>
                        <div
                          className="decreaseQty"
                          onClick={() => handleIncrease(value.name)}
                        >
                          <MdAdd />
                        </div>
                      </div>
                      <div className="summaryButtons">
                        <button
                          onClick={() => handleRemoveItem(value.name)}
                        >
                          Delete
                        </button>
                        <button>Save to mood boards</button>
                      </div>
                      <div className="SummaryPrice">
                        <h4 className="Sumprice">
                          {(value.price * value.quantity) }
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="summaryTotal">
          <div className="totalHead">
            <h3>Order summary</h3>
            <button>Need Some Help?</button>
          </div>
          <div className="OrderSummary">
            <div className="subTotal">
              <p>Subtotal</p>
              <span>£{subtotal}</span>
            </div>
            <div className="shipping">
              <p>Shipping</p>
              <span>Calculated at next step</span>
            </div>
            <div className="orderTotal">
              <h1>Total</h1>
              <h2>£{subtotal}</h2>
            </div>
          </div>
          <div className="FinalBuyBtn">
            <button>Go To cheackout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
