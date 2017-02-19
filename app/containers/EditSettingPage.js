// @flow
import React, { Component } from 'react';
const FormControl = require('react-bootstrap/lib/FormControl');
var targetDB = require('../utils/data-provider').targetDb();


export default class EditSettingPage extends Component {
	getSetting() {
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
  	const projectId = this.props.params.projectId;
  	targetDB.get(projectId).then(function(doc) {
  		document.getElementById('projectName').value = doc.projectName;
        document.getElementById('srcLangName').value = doc.srcLangName;
        document.getElementById('srcLangScript').value = doc.srcLangScript;
        document.getElementById('targetLanguage').value = doc.targetLang;
        document.getElementById('targetLanguageScript').value = doc.targetLangScript;
    }).catch(function(err) {
    	console.log(err);
    });
    return (
      <div>
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
                    <button className="btn btn-success" id="ref-import-btn" onClick={this.saveSetting}>Update Import</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
