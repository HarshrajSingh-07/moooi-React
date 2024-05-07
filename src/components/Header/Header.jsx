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
import WishModal from "../Wishlist/WishModal";
import { MdOutlineArrowRight } from "react-icons/md";

const Header = ({
  Textcolor,
  backgroundColor,
  leftHeader,
  CenterHead,
  toggleCardHeight,
  HideBuyWhenCartOpen,
  handleSearch,
  open,
  handleOpen,
  handleClose,
  pagination,
  paginationSection,
}) => {
  const cartItem = useSelector((state) => state.cart.items);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [headerColor, setHeaderColor] = useState("white");
  const [divOffsetTop, setDivOffsetTop] = useState(0);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState(null);
  const [filteredSections, setFilteredSections] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
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
    setIsBagOpen(!isBagOpen);
    if (mediaQuery.matches) {
      HideBuyWhenCartOpen();
    } else {
      toggleCardHeight();
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
    if (searchQuery.trim() === "") {
      console.warn("Search query is empty.");
      return;
    }

    const sectionId = searchQuery.trim().toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMessage("");
    } else {
      setMessage("Section not found !");
    }

    setSearchQuery("");
  };
  return (
    <>
      <WishModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        msg={"Successfully !"}
      />
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
          <Link to="/">
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
        <div className="pagination" style={{ display: `${pagination}` }}>
          <Link to="/">Home</Link>
          <MdOutlineArrowRight />
          {paginationSection}
        </div>
        <div className="headRight">
          {isSearchVisible && (
            <>
              <div className="searchBtn">
                {message ? (
                  <span className="searchMessage">{message}</span>
                ) : (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="searchInput"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            </>
          )}
          <div className="headerIcon">
            <IoMdSearch onClick={handleSearchClick} />
          </div>
          <div className="headerIcon">
            <BsGrid1X2 onClick={handleOpen} />
          </div>
          <div className="shopingBag" onClick={toggleBag}>
            <FiShoppingBag />
            <span className="CartQnty">{cartItem.length}</span>
          </div>
        </div>
      </header>
      <Bag isBagOpen={isBagOpen} toggleBag={toggleBag} />
    </>
  );
};

export default Header;
