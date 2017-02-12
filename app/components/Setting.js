// @flow
import React, { Component } from 'react';
const Navbar = require('./navbar.js');
const Footer = require('./footer.js');
const FormControl = require('react-bootstrap/lib/FormControl');
var targetDB = require('../utils/data-provider').targetDb();

export default class Setting extends Component {
  saveSetting() {
      var id = (document.getElementById('projectName').value).replace(/ +/g, ""),
            projectName = document.getElementById('projectName').value,
            srcLangName = document.getElementById('srcLangName').value,
            srcLangScript = document.getElementById('srcLangScript').value,
            targetLanguage = document.getElementById('targetLanguage').value,
            targetLanguageScript = document.getElementById('targetLanguageScript').value; 
          
          targetDB.get(projectName).then(function(doc) {

          targetDB.put({
              _id: id,
              _rev: doc._rev,
              projectName: projectName,
              srcLangName: srcLangName,
              srcLangScript: srcLangScript,
              targetLang: targetLanguage,
              targetLangScript: targetLanguageScript

          }).then(function(e) {
              console.log("Project setting saved successfully!!");
          });
        }).catch(function(err) {
          targetDB.put({
              _id: id,
              projectName: projectName,
              srcLangName: srcLangName,
              srcLangScript: srcLangScript,
              targetLang: targetLanguage,
              targetLangScript: targetLanguageScript
          }).then(function(e) {
              console.log("Project setting saved successfully!!");
          }).catch(function(err) {
              console.log(err);
              console.log("Something went wrong!! Please try again");
          });
      });
   
  }
  render() {
    return (
      <div>
        <Navbar />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <h3>Project Settings</h3>
                    <div className="form-group">
                      <label>Project Name</label>
                      <FormControl type="text" id="projectName" placeholder=""></FormControl>
                    </div>
                    <div className="form-group">
                      <label>Source Language Name</label>
                      <FormControl type="text"  id="srcLangName" placeholder="hi"></FormControl>
                    </div>
                    <div className="form-group">
                      <label>Source Language Script</label>
                      <FormControl type="text" id="srcLangScript" placeholder=""></FormControl>
                    </div>
                    <div className="form-group">
                      <label>Target Language</label>
                      <FormControl type="text" id="targetLanguage" placeholder=""></FormControl>
                    </div>
                    <div className="form-group">
                      <label>Target Language Script</label>
                      <FormControl  id="targetLanguageScript" placeholder=""></FormControl>
                    </div>
                    <button className="btn btn-success" id="ref-import-btn" onClick={this.saveSetting}>Import</button>
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
