import React, { useState } from "react";
import "./Header.css";
import { IoMicOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { BsGrid1X2, BsJournalRichtext } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import Bag from "../Bag/Bag";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Header = ({
  Textcolor,
  backgroundColor,
  leftHeader,
  CenterHead,
  toggleCardHeight,
  HideBuyWhenCartOpen,
  handleSearch,
}) => {
  const cartItem = useSelector((state) => state.cart.items);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [headerColor, setHeaderColor] = useState("white");
  const [divOffsetTop, setDivOffsetTop] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(window.scrollY, sectionTop, sectionHeight);
        if (
          window.scrollY >= sectionTop - 50 &&
          window.scrollY < sectionTop + sectionHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const [isBagOpen, setIsBagOpen] = useState(false);
  const toggleBag = () => {
    const mediaQuery = window.matchMedia("(max-width: 575.98px)");
    setIsBagOpen(!isBagOpen); // Toggle bag visibility
    if (mediaQuery.matches) {
      HideBuyWhenCartOpen();
    } else {
      toggleCardHeight();
    }
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      {/* <header style={{ color: Textcolor, backgroundColor: backgroundColor }} > */}
      <header
        className={`header ${visible ? "visible" : "hidden"} ${
          activeSection === "collection" || activeSection === "productStory"
            ? "bg_dark"
            : null
        }`}
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
              className={`${
                activeSection === "collection" ||
                activeSection === "productStory"
                  ? "bg_dark"
                  : null
              }`}
              style={headerColor ? { color: Textcolor } : null}
            >
              moooi
            </h3>
          </Link>
        </div>
        <div className="headRight">
          {isSearchVisible && <input type="text" placeholder="Search..." />}
          <IoMdSearch onClick={toggleSearch} />
          <BsGrid1X2 />
          {/* Attach onClick handler to FiShoppingBag to toggle bag visibility */}
          <div className="shopingBag" onClick={toggleBag}>
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
