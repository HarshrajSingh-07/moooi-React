import React from "react";
import "./Header.css";
import { IoMicOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { BsGrid1X2 } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="headLeft">
          <IoMicOutline />
        </div>
        <div className="headCent">
          <Link to='/' element="./App.js">
          <h3>moooi</h3>
          </Link>
        </div>
        <div className="headRight">
          <IoMdSearch />
          <BsGrid1X2 />
          <FiShoppingBag />
        </div>
      </header>
    </>
  );
};

export default Header;
