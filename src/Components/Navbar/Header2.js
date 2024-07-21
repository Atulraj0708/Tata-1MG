import React from "react";
import { ImLocation } from "react-icons/im";
import { IoMdLocate } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { FaFire } from 'react-icons/fa';
import Button from "./Button";
import "./Header2.css";

const Header2 = () => {
  const styles = {
    bg: "#ff6f61",
    text: "Quick Order",
    width: "140px",
    br: "3px",
    color: "#ffffff",
    height: "40px", 
    fontSize: "16px",
  };

  return (
    <div className="header_2Con">
      <div className="firstCon">
        <div className="container">
          {/* Location */}
          <div className="locationCon">
            <span>
              <ImLocation />
            </span>
            <input
              type="text"
              className="location"
              value= "New Delhi"
            />
            <span style={{ cursor: "pointer" }}>
              <IoMdLocate />
            </span>
          </div>
          {/* Search bar */}
          <div className="searchbarCon">
            <input
              type="text"
              className="searchbar"
              placeholder="Search for Medicines and Health Products"
            />
            <span>
              <BiSearch />
            </span>
          </div>
        </div>
      </div>
      <div className="secondCon">
        <div className="container">
          <span>
            <FaFire color="#ff6f61" size="24px" /> 
          </span>
          <p>QUICK BUY! Get 15% off on medicines*</p>
           <Button styles={styles} /> 
        </div>
      </div>
    </div>
  );
};

export default Header2;
