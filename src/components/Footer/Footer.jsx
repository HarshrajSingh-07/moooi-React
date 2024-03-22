import React from "react";
import "./Footer.css";
import { SlArrowDown } from "react-icons/sl";
import { HiArrowUp } from "react-icons/hi";
import { FaPinterest } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaVimeo } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa6";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Smooth scrolling animation
        });
    }
  return (
    <section id="footer">
      <div className="footer-main">
        <div className="footer-top">
          <div className="selectText">
            <button>
              <select name="country">
                <option value="Europe">Europe</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Sweden">Sweden</option>
                <option value="my country/region is not listed">My country/region is not listed</option>
              </select>
              <span >
                <SlArrowDown className="country-down-icon" />
              </span>
            </button>
          </div>
          <div className="B2T" onClick={scrollToTop}>
            <HiArrowUp />
          </div>
        </div>
        <div className="footer-mid">
          <ul>
            <li>Store Locator</li>
            <li>Material Library</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Newsletter</li>
            <li>Press Area</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footerIcon">
            <FaPinterest className="socialicon" />
            <LuInstagram className="socialicon" />
            <FaVimeo className="socialicon" />
            <FaLinkedin className="socialicon" />
            <FaFacebook className="socialicon" />
            <FaSpotify className="socialicon" />
          </div>
          <div className="fnav">
            <a href="">Disclaimer</a>
            <a href="">Cookie Policy</a>
            <a href="">General Conditions</a>
            <a href="">Privacy Statement</a>
            <a href="">©2024 Moooi</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
