import React, { Component } from 'react'
import { Line } from 'rc-progress';
import Circle from 'react-circle';

import "./viewProduct.css"
import img from "./cbd.png"
import Rating from './rating';
import Header from "../../about/aboutHeader/header"
import { connect } from "react-redux"
import { Url } from "../../../shared"

class ViewProduct extends Component {

    render() {
        const id = this.props.match.params.id
        const products = this.props.rows.filter(row => row._id === id)
        const product = products[0]
        const nmb = 21;
        let clr = "black";
        if (nmb > 20) { clr = "green" };
        if (nmb > 30) { clr = "blue" };
        if (id) {
            return (
                <div>
                    <Header />
                    <div className="vp-container">
                        <div>
                            <p>{product.name}</p>
                        </div>
                        <div className="vp-c2">
                            <div className="vp-img-area">
                                <img className="vp-img" src={Url + "uploads/" + product.image} alt="" />
                                <button>Buy it Now</button>
                            </div>
                            <div className="vp-img-area">
                                <p>Ranking</p>
                                <Circle className="circle-bar" progress={product.avgRating} size="200" />
                            </div>
                            <div className="vp-rating-area">
                                <p>Rate this Products</p>

                                <Rating pid={product._id} />
                            </div>
                        </div>

                        <div>
                            <div className="cbd-prgrs-area">
                                <p>CBD/Bottle</p>
                                <span className="bar-txt"><Line className="progress-bar1" percent={`${product.CBD}`} trailColor={clr} strokeWidth="4" strokeColor={clr} /> 20</span>
                                <span className="bar-txt"> <Line className="progress-bar1" percent={`${product.CBD1}`} strokeWidth="4" />20</span>
                            </div>
                            <div className="cbd-prgrs-area">
                                <p>THC</p>
                                <span className="bar-txt"><Line className="progress-bar1" percent={`${product.THC}`} trailColor={clr} strokeWidth="4" strokeColor={clr} />20</span>
                                <span className="bar-txt"> <Line className="progress-bar1" percent={`${product.THC1}`} strokeWidth="4" />20</span>
                            </div>
                            <div className="cbd-prgrs-area">
                                <p>heavy metals</p>
                                <span className="bar-txt"><Line className="progress-bar1" percent={`${product.heavyMetals}`} trailColor={clr} strokeWidth="4" strokeColor={clr} />20</span>
                                <span className="bar-txt"><Line className="progress-bar1" percent={`${product.heavyMetals1}`} strokeWidth="4" s />20</span>
                            </div>

                        </div>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = ({ Foods: { foods } }) => ({
    rows: foods
});


export default connect(mapStateToProps, null)(ViewProduct)