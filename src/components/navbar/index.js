import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/s_k_logo.png'
import '../../scss/main.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

// react-router's Link is a forwardRef object; reactstrap `tag` only allows string | function.
function NavbarBrandLink(props) {
  return <Link {...props} />;
}

export default class Nav_Bar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.state = {
      isOpen: false,
      isMobileMenuOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleMobileMenu() {
    this.setState({
      isMobileMenuOpen: !this.state.isMobileMenuOpen
    });
  }
  closeMobileMenu() {
    this.setState({
      isMobileMenuOpen: false
    });
  }
  render() {
    return (
      <div className="nav-container-div">
        {/* Desktop Navbar */}
        <Navbar className="sticky-top desktop-navbar" expand="md">
          <NavbarBrand tag={NavbarBrandLink} to="/"><img className='logo-oswc' alt="logo" src={logo}/></NavbarBrand>
          <NavbarToggler className="navbar-light" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="parent-nav" navbar>
              <NavItem>
                <Link className="nav-link" to="/">HOME</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">ABOUT</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/resources">RESOURCES</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.gofundme.com/">DONATE</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {/* Mobile/Tablet Ionic-style Navbar */}
        <div className="mobile-navbar">
          <div className="mobile-toolbar">
            <div className="mobile-toolbar-start">
              <img className="mobile-navbar-logo" alt="logo" src={logo} />
            </div>
            <div className="mobile-toolbar-end">
              <button className="mobile-menu-button" onClick={this.toggleMobileMenu}>
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            </div>
          </div>

          {/* Side Menu */}
          <div className={`mobile-menu ${this.state.isMobileMenuOpen ? 'menu-open' : ''}`} onClick={this.closeMobileMenu}>
            <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <div className="mobile-menu-title">MENU</div>
                <button className="mobile-menu-close" onClick={this.closeMobileMenu}>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
              <div className="mobile-menu-list">
                <Link className="mobile-menu-item" to="/" onClick={this.closeMobileMenu}>
                  <ion-icon name="home-outline" className="menu-item-icon"></ion-icon>
                  <span className="menu-item-label">HOME</span>
                </Link>
                <Link className="mobile-menu-item" to="/about" onClick={this.closeMobileMenu}>
                  <ion-icon name="information-circle-outline" className="menu-item-icon"></ion-icon>
                  <span className="menu-item-label">ABOUT</span>
                </Link>
                <Link className="mobile-menu-item" to="/resources" onClick={this.closeMobileMenu}>
                  <ion-icon name="book-outline" className="menu-item-icon"></ion-icon>
                  <span className="menu-item-label">RESOURCES</span>
                </Link>
                <a className="mobile-menu-item" href="https://donorbox.org/oswc-human-rights-committee" onClick={this.closeMobileMenu}>
                  <ion-icon name="heart-outline" className="menu-item-icon"></ion-icon>
                  <span className="menu-item-label">DONATE</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



