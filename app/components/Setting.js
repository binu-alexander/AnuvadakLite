// @flow
import React, { Component } from 'react';
const Navbar = require('./navbar.js');
const Footer = require('./footer.js');
const FormControl = require('react-bootstrap/lib/FormControl');


export default class Setting extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <h3>Reference project settings</h3>
                    <div className="form-group">
                      <label>Reference Project Name</label>
                      <FormControl type="text" id="ref-name" placeholder="Hindi - UDB (BSI)"></FormControl>
                    </div>
                    <div className="form-group">
                      <label>Reference Project Language Code</label>
                      <FormControl type="text"  id="ref-lang-code" placeholder="hi"></FormControl>
                      <div id="reference-lang-result" className="lang-code"></div>
                      <FormControl type="hidden" id="langCode"></FormControl>
                    </div>
                    <div className="form-group">
                      <label>Reference Project Version</label>
                      <FormControl type="text" id="ref-version" placeholder="udb-s1"></FormControl>
                    </div>
                    <div className="form-group">
                      <label>Reference Project Folder Location</label>
                      <FormControl  id="ref-path" placeholder="/path/to/reference-Project/folder"></FormControl>
                    </div>
                    <button className="btn btn-success" id="ref-import-btn">Import</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}
module.exports = Setting
