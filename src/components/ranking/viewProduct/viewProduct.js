import React, { Component } from 'react'
import { Line } from 'rc-progress';
import Circle from 'react-circle';

import "./viewProduct.css"
import img from "./cbd.png"
import Rating from './rating';
import Header from "../../about/aboutHeader/header"
export default class ViewProduct extends Component {
    render() {

        const nmb = 21;
        let clr = "black";
        if (nmb > 20) { clr = "green" };
        if (nmb > 30) { clr = "blue" };
        return (
            <div>
                <Header />
                <div className="vp-container">
                    <div>
                        <p>Garden Of Life Dr. Formulated CBD 10mg Peppermint</p>
                    </div>
                    <div className="vp-c2">
                        <div className="vp-img-area">
                            <img className="vp-img" src={img} alt="" />
                            <button>Buy it Now</button>
                        </div>
                        <div className="vp-img-area">
                            <p>Ranking</p>
                            <Circle className="circle-bar" progress={35} size="200" />
                        </div>
                        <div className="vp-rating-area">
                            <p>Rate this Products</p>

                            <Rating />
                        </div>
                    </div>

                    <div>
                        <div className="cbd-prgrs-area">
                            <p>CBD/Bottle</p>
                            <span className="bar-txt"><Line className="progress-bar1" percent="70" trailColor={clr} strokeWidth="4" strokeColor={clr} /> 20</span>
                            <span className="bar-txt"> <Line className="progress-bar1" percent="50" strokeWidth="4" />20</span>
                        </div>
                        <div className="cbd-prgrs-area">
                            <p>THC</p>
                            <span className="bar-txt"><Line className="progress-bar1" percent="10" trailColor={clr} strokeWidth="4" strokeColor={clr} />20</span>
                            <span className="bar-txt"> <Line className="progress-bar1" percent="40" strokeWidth="4" />20</span>
                        </div>
                        <div className="cbd-prgrs-area">
                            <p>heavy metals</p>
                            <span className="bar-txt"><Line className="progress-bar1" percent="50" trailColor={clr} strokeWidth="4" strokeColor={clr} />20</span>
                            <span className="bar-txt"><Line className="progress-bar1" percent="60" strokeWidth="4" s />20</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
