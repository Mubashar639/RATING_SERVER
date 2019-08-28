import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
   
 
} from 'reactstrap';
import {Link} from "react-router-dom"
import "./header.css"
import Logo from "./images/logo-labdoor-white.svg"

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="header-container">
                <Navbar className="header-c" color="light"  expand="xl">
                    <Link to="/"><img src={Logo} alt="Labdoor"/></Link>
                    <NavbarToggler className="header-toggler" onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto header-link-area" navbar>
                            <NavItem>
                                <NavLink  to="/about"><Link className="header-link" to="/about">About</Link></NavLink>
                            </NavItem>                            <NavItem>
                                <NavLink  to="/"><Link className="header-link" to="/">Rankings</Link></NavLink>
                            </NavItem>                            <NavItem>
                                <NavLink  to="/"><Link className="header-link" to="/">Certified Products</Link></NavLink>

                            </NavItem>                            <NavItem>
                                <NavLink  to="/"><Link className="header-link" to="/">Login</Link></NavLink>

                            </NavItem>                            <NavItem>
                                <NavLink  to="/"><Link className="header-signup-link" to="/">Sign Up</Link></NavLink>

                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <h1 className="header-h-h1">Shop Smart for CBD Oil</h1>
                <div className="header-view-rankings">View Rankings</div>
            </div>
        );
    }
}