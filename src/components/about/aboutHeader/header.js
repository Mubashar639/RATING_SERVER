import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
import {Link} from "react-router-dom";
import Logo from "./images/logo.png"
import "./header.css"
export default class Example extends React.Component {
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
      <div className="about-h-container">
        <Navbar className="abt-header-c" light expand="xl">
        <Link to="/"><img className="cbd-logo" src={Logo} alt="Labdoor"/></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto about-link-area" navbar>
                            <NavItem>
                                <NavLink  to="/"><Link className="about-h-link" to="/">Home</Link></NavLink>
                            </NavItem>                            <NavItem>
                                <NavLink  to="/"><Link className="about-h-link" to="/">Rankings</Link></NavLink>

                            </NavItem>                            <NavItem>
                            <NavLink  to="/"><Link className="about-h-link" to="/">Certified Products</Link></NavLink>                              
                            </NavItem>                            <NavItem>
                            <NavLink  to="/"><Link className="about-h-link" to="/">Login</Link></NavLink>
                            </NavItem>                            <NavItem>
                            <NavLink  to="/"><Link className="about-h-link" to="/">Sign Up</Link></NavLink>
                            </NavItem>
                        </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}