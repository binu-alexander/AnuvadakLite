// @flow
import React, { Component } from 'react';
const Navbar = require('./navbar.js');
const Footer = require('./footer.js');
const FormControl = require('react-bootstrap/lib/FormControl');
const Table = require('react-bootstrap/lib/Table');
import { Link } from 'react-router';
var targetDB = require('../utils/data-provider').targetDb();
var tr = '';

export default class ProjectList extends Component {
    constructor () {
      super()
      this.state = {val: []}
      var rows = [];
      var rowsData = targetDB.allDocs({include_docs: true}).then(function(documents) {
      documents.rows.forEach(function(doc){
        rows.push({id: doc.id, projectName: doc["doc"].projectName, 
          srcLangName: doc["doc"].srcLangName, srcLangScript: doc["doc"].srcLangScript, 
          targetLang: doc["doc"].targetLang, targetLangScript: doc["doc"].targetLangScript});
        });
        return rows;
      });
      rowsData.then((value) => {
        this.setState({val: value})
      })
  }
  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <h3>Project List </h3>
                    <Table striped bordered condensed hover>
                      <thead>
                        <tr>
                          <th>Project Name</th>
                          <th>Source Language Name</th>
                          <th>Source Language Script</th>
                          <th>Target Language</th>
                          <th>Target Language Script</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                          { 
                              this.state.val.map(function(doc, i) {
                              return (
                                <tr key={i}>
                                  <td>{doc.projectName}</td>
                                  <td>{doc.srcLangName}</td>
                                  <td>{doc.srcLangScript}</td>
                                  <td>{doc.targetLang}</td>
                                  <td>{doc.targetLangScript}</td>
                                  <td><Link to={"project/" + doc.id}>Edit</Link></td>
                                </tr>
                              );
                              })
                          }
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
module.exports = ProjectList
