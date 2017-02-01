const React = require('react');
const bootstrap = require('react-bootstrap');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');


class Footer extends React.Component {
  render() {
    return (
          <div>
            <Navbar  collapseOnSelect fixedBottom className="navbar-default" >
            </Navbar>
          </div>
    )}
};

module.exports = Footer
