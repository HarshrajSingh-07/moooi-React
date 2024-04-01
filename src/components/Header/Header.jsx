import React, { useState } from "react";
import "./Header.css";
import { IoMicOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { BsGrid1X2, BsJournalRichtext } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Bag from "../Bag/Bag"; 
import { useEffect } from "react";
import { LiaEyeSlashSolid } from "react-icons/lia";

const Header = ({ Textcolor, backgroundColor, leftHeader, CenterHead }) => {
  const [headerColor, setHeaderColor] = useState("header");
  const [divOffsetTop, setDivOffsetTop] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const div = document.getElementById("collection");
  //     const rect = div.getBoundingClientRect();
  //     const Productstory  = document.getElementById("design");
  //     const presents  = document.getElementById("design");
  //     const strategy  = document.getElementById("design");
  //     const dream  = document.getElementById("design");
   
  //     if(rect.top<30)
  //     {
  //       setHeaderColor("collection")
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [isBagOpen, setIsBagOpen] = useState(false); // State to manage bag visibility

  const toggleBag = () => {
    setIsBagOpen(!isBagOpen); // Toggle bag visibility
  };
  useEffect(() => {
    if(isBagOpen)
    {
      document.body.style.backdropFilter="blure(5px)";
      document.body.style.overflow="hidden";
    }
else    {
      document.body.style.backdropFilter="blure(5px)";
      document.body.style.overflow="unset";
    }
  }, [isBagOpen])
  return (
    <>
      {/* <header style={{ color: Textcolor, backgroundColor: backgroundColor }} > */}
      <header style={headerColor?{ color: Textcolor , backgroundColor: backgroundColor ,color:"black" }:null} >
        <div className="headLeft" style={{ display: leftHeader }}>
          <IoMicOutline />
        </div>
        <div className="headCent" style={{ justifyContent : CenterHead }}>
          <Link to="/" element="./App.js">
            <h3 style={headerColor?{ color: Textcolor,color:"black" }:null}>moooi</h3>
          </Link>
        </div>
        <div className="headRight" >
          <IoMdSearch />
          <BsGrid1X2 />
          {/* Attach onClick handler to FiShoppingBag to toggle bag visibility */}
          <FiShoppingBag onClick={toggleBag} />
        </div>
      </header>
      {/* Render the Bag component conditionally based on the state */}
      {/* {isBagOpen && <Bag toggleBag={toggleBag} />}   */}
      <Bag isBagOpen={isBagOpen} toggleBag={toggleBag} />
    </>
  );
};

export default Header;
