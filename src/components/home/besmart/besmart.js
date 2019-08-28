import React from 'react';
import "./besmart.css"
import icon1 from "./images/1st.png";
import icon2 from "./images/2nd.png";
import icon3 from "./images/3rd.png";

function BeSmart() {
  return (
    <div className="besmart-container">
        <div className="besmart-c">
            <img src={icon1} alt=""/>
            <h5 className="besmart-h5">BE SMART</h5>
            <p className="besmart-p">Find quality supplements with minimal effort. Our experts test products and give you the results for free.</p>
        </div>
        <div className="besmart-c">
            <img src={icon2} alt=""/>
            <h5 className="besmart-h5">BE SAFE</h5>
            <p className="besmart-p">Know which products are effective and safe. Then, confidently buy what's best for you.</p>
        </div>
        <div className="besmart-c">
            <img src={icon3} alt=""/>
            <h5 className="besmart-h5">BE SAFE</h5>
            <p className="besmart-p">Count on us to be on your side. Our testing is free from manufacturer bias and always will be.</p>
        </div>

    </div>
  );
}

export default BeSmart;
