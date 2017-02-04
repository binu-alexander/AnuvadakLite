const React = require('react');
const bootstrap = require('react-bootstrap');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');
const Button = require('react-bootstrap/lib/Button');
import { Link } from 'react-router';


class NavBar extends React.Component {
  render() {
    return (
          <div className="container-fluid">
            <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Button bsSize="large" className="navbar-toggle collapsed">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </Button>
                <Link to="/" className="navbar-brand navigation-btn" href="index.html">
                  <img alt="Brand" src={"../assets/images/logo.png"} />
                </Link>
              </Navbar.Header>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                 <li><Link to="/setting"><i className="fa fa-cog fa-2x"></i></Link></li>
                  <li><Link to="/setting"><i className="fa fa-info fa-2x"></i></Link></li>
                  <li><Link to="/export"><i className="fa fa-cloud-download fa-2x"></i></Link></li>
                </ul>
              </div>
            </Navbar>
          </div>
    )}
};

module.exports = NavBar
