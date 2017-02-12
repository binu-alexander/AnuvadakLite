// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SettingPage from './containers/SettingPage';
import ProjectListPage from './containers/ProjectListPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/setting" component={SettingPage} />
    <Route path="/projectList" component={ProjectListPage} />
  </Route>
);
