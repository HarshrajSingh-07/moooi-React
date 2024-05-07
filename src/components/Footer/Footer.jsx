import React, { useEffect, useState } from "react";
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
  const [selectedCountry, setSelectedCountry] = useState("Europe");
  const [flagUrl, setFlagUrl] = useState("https://flagsapi.com/EU/flat/64.png");

  useEffect(() => {
    const countryCode = getCountryCode(selectedCountry);
    setFlagUrl(`https://flagsapi.com/${countryCode}/flat/64.png`);
  }, [selectedCountry]);

  function updateFlag(event) {
    const selectedValue = event.target.value;
    setSelectedCountry(selectedValue);
  }

  function getCountryCode(countryName) {
    switch (countryName) {
      case "Europe":
        return "EU";
      case "United Kingdom":
        return "GB";
      case "United States":
        return "US";
      case "Netherlands":
        return "NL";
      case "Sweden":
        return "SE";
      default:
        return ""; // Handle the case where the country is not listed
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <section id="footer" className="section">
      <div className="footer-main">
        <div className="footer-top">
          <div className="selectText">
            <button>
              <img id="flag-img" src={flagUrl} alt="" />
              <select
                id="country-select"
                name="country"
                value={selectedCountry}
                onChange={updateFlag}
              >
                <option value="Europe">Europe</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Sweden">Sweden</option>
                <option value="my country/region is not listed">
                  My country/region is not listed
                </option>
              </select>
              <span>
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
            <li>Shipping & Returns</li>
            <li>Material Library</li>
            <li>Store Locator</li>
            <li>Newsletter</li>
            <li>Press Area</li>
            <li>Jobs</li>
            <li>FAQ</li>
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
