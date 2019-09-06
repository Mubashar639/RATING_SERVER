import React from 'react';
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import "./style.css"
function TopBrands() {
  return (
    <div className="tb-logo-area">
      <p className="top-brands-title">Listing some of the UK’s Top Brands:</p>
      <div className="tb-logo-area2">
        <img className="tb-logo" src={logo1} alt="" />
        <img className="tb-logo2" src={logo2} alt="" />
        <img className="tb-logo3" src={logo3} alt="" />
        <img className="tb-logo4" src={logo4} alt="" />
      </div>
    </div>
  );
}

export default TopBrands;
