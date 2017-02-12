// @flow
import React, { Component } from 'react';
const Navbar = require('./navbar.js');
const Footer = require('./footer.js');
const FormControl = require('react-bootstrap/lib/FormControl');
var targetDB = require('../utils/data-provider').targetDb();
const Table = require('react-bootstrap/lib/Table');
var tr = '';

export default class ProjectList extends Component {
    constructor () {
      super()
      this.state = {}
      var rows = [];
      var rowsData = targetDB.allDocs({include_docs: true}).then(function(documents) {
      documents.rows.forEach(function(doc){
        rows.push({id: doc["doc"].id, projectName: doc["doc"].projectName, 
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
        <Navbar />
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
                          {this.state.val.map(function(doc, i) {
                            return (
                              <tr key={i}>
                                <td>{doc.projectName}</td>
                                <td>{doc.srcLangName}</td>
                                <td>{doc.srcLangScript}</td>
                                <td>{doc.targetLang}</td>
                                <td>{doc.targetLangScript}</td>
                                <td></td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
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
module.exports = ProjectList
