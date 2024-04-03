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
import { useSelector } from "react-redux";

const Header = ({ Textcolor, backgroundColor, leftHeader, CenterHead,HideBuyWhenCartOpen}) => {
  const cartItem = useSelector((state) => state.cart.items);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [headerColor, setHeaderColor] = useState("white");
  const [divOffsetTop, setDivOffsetTop] = useState(0);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sectionOffsets = {
  //       collection: document.getElementById("collection").offsetTop,
  //       design: document.getElementById("design").offsetTop,
  //       presents: document.getElementById("Presents").offsetTop,
  //       // Add more sections as needed
  //     };

  //     const scrollPosition = window.scrollY;

  //     if (scrollPosition < sectionOffsets.design) {
  //       setHeaderColor("white");
  //     } else if (scrollPosition < sectionOffsets.presents) {
  //       setHeaderColor("black");
  //     } else if (scrollPosition < sectionOffsets.strategy) {
  //       setHeaderColor("green");
  //     } else {
  //       setHeaderColor("blue");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); 
  //   };
  // }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  const [isBagOpen, setIsBagOpen] = useState(false); // State to manage bag visibility

  const toggleBag = () => {
    setIsBagOpen(!isBagOpen); // Toggle bag visibility
    HideBuyWhenCartOpen();
  };

  return (
    <>
      {/* <header style={{ color: Textcolor, backgroundColor: backgroundColor }} > */}
      <header className={`header ${visible ? "visible" : "hidden"}`}
        style={
          headerColor
            ? {
                color: Textcolor,
                backgroundColor: backgroundColor,
              }
            : null
        }
      >
        <div className="headLeft" style={{ display: leftHeader }}>
          <IoMicOutline />
        </div>
        <div className="headCent" style={{ justifyContent: CenterHead }}>
          <Link to="/" element="./App.js">
            <h3
              style={headerColor ? { color: Textcolor} : null}
            >
              moooi
            </h3>
          </Link>
        </div>
        <div className="headRight">
          <IoMdSearch />
          <BsGrid1X2 />
          {/* Attach onClick handler to FiShoppingBag to toggle bag visibility */}
          <div className="shopingBag" onClick={toggleBag} >
          <FiShoppingBag />
          <span className="CartQnty">{cartItem.length}</span>
          </div>
        </div>
      </header>
      {/* Render the Bag component conditionally based on the state */}
      {/* {isBagOpen && <Bag toggleBag={toggleBag} />}   */}
      <Bag isBagOpen={isBagOpen} toggleBag={toggleBag} />
    </>
  );
};

export default Header;
