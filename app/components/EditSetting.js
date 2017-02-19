// @flow
import React, { Component } from 'react';
const FormControl = require('react-bootstrap/lib/FormControl');
import { Router, Route, Link, browserHistory } from 'react-router'
var targetDB = require('../utils/data-provider').targetDb();
import Setting from "./Setting";

export default class EditSetting extends Component {
 props: {
    projectId: string
  };
  updateSetting(props) {
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
  
}
module.exports = EditSetting
