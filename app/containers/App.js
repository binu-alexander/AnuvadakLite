// @flow
import React, { Component } from 'react';
const NavBar = require('../components/navbar.js');
const Footer = require('../components/footer.js');
export default class App extends Component {
  static propsTypes = {
    history: React.PropTypes.object,
    config: React.PropTypes.object,
    initialState: React.PropTypes.object
  };
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
        <NavBar />
          {this.props.children}
        <Footer />
      </div>
    );
  }
}
