import React, { useState } from "react";
import "./Header.css";
import { IoMicOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { BsGrid1X2, BsJournalRichtext } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Bag from "../Bag/Bag"; // Import the Bag component

const Header = () => {
  const [isBagOpen, setIsBagOpen] = useState(false); // State to manage bag visibility

  const toggleBag = () => {
    setIsBagOpen(!isBagOpen); // Toggle bag visibility
  };

  return (
    <>
      <header>
        <div className="headLeft">
          <IoMicOutline />
        </div>
        <div className="headCent">
          <Link to="/" element="./App.js">
            <h3>moooi</h3>
          </Link>
        </div>
        <div className="headRight">
          <IoMdSearch />
          <BsGrid1X2 />
          {/* Attach onClick handler to FiShoppingBag to toggle bag visibility */}
          <FiShoppingBag onClick={toggleBag} />
        </div>
      </header>
      {/* Render the Bag component conditionally based on the state */}
      {/* {isBagOpen && <Bag toggleBag={toggleBag} />}   */}
      <Bag isBagOpen={isBagOpen} toggleBag={toggleBag}  />
    </>
  );
};

export default Header;
