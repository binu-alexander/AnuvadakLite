const React = require('react');
const bootstrap = require('react-bootstrap');
const Nav = require('react-bootstrap/lib/Nav');
const NavItem = require('react-bootstrap/lib/NavItem');
const Navbar = require('react-bootstrap/lib/Navbar');
const NavDropdown = require('react-bootstrap/lib/NavDropdown');
const MenuItem = require('react-bootstrap/lib/MenuItem');


class NavBar extends React.Component {
  render() {
    return (
          <div className="container-fluid">
            <Navbar inverse collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Anuvadak</a>
                </Navbar.Brand>
              </Navbar.Header>

            </Navbar>
          </div>
    )}
};

module.exports = NavBar
