// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SettingPage from './containers/SettingPage';
import ProjectListPage from './containers/ProjectListPage';
import EditSettingPage from './containers/EditSettingPage';


export default (
 <Route path="/" component={App}>
    <IndexRoute component={HomePage}></IndexRoute>
    <Route path="projectSetting" component={SettingPage}></Route>
    <Route path="projects" component={ProjectListPage}></Route>
    <Route path="project(/:projectId)" name="editsetting" component={EditSettingPage}></Route>
</Route>
);
