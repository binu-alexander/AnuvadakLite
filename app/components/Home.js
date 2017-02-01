// @flow
import React, { Component } from 'react';
const Navbar = require('./navbar.js');
const Footer = require('./footer.js');


export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className="container-fluid">
            <div className="row row-col-fixed">
              <div className="col-sm-6 col-fixed">
                <div className="row">
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}
