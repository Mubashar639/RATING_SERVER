import React from 'react';
import img from "./images/infographic.png";

import "./style.css"

function InfoGraphic() {
  return (
    <div className="infographic-container">
      {/* <div className="info-c2">
        <div></div>
        <div></div>
       <span className="info-hr1"></span> */}
      <img className="info-img" src={img} alt=""/>
      {/* </div> */}
    </div>
  );
}

export default InfoGraphic;
