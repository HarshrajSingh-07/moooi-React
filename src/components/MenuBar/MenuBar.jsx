import React from "react";
import "./MenuBar.css";
import { IoMdSearch } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";

const MenuBar = ({ handleLogin, handleSignup, handleContactClick }) => {
  return (
    <RemoveScroll>
      <section id="MenuBar">
        <div className="menuContainer ">
          <div className="menuSearchHead">
            <div className="menuSearch">
              <IoMdSearch />
            </div>
            <div className="menuInputSearch">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for products, stories, …"
              />
            </div>
            <div className="menuMic">
              <IoMicOutline />
            </div>
          </div>

          <div className="MenuHead">
            <h3>
              Products
              <br />
              Stories
              <br />
              Gift Guide
            </h3>
          </div>
          <div className="menuNavbar">
            <ul>
              <Link to="/" onClick={handleContactClick}>
                <li>Home</li>
              </Link>
              <li>About Us</li>
              <li onClick={handleLogin}>Login</li>
              <li onClick={handleSignup}>Signup</li>
              <Link to="contact" onClick={handleContactClick}>
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </RemoveScroll>
  );
};

export default MenuBar;
