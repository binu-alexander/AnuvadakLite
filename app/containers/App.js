// @flow
import React, { Component } from 'react';
const NavBar = require('../components/navbar.js');
export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
