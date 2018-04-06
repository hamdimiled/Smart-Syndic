/*import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "../src/assets/css/material-dashboard-react.css";

import indexRoutes from "./routes/index.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")  
);  */


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './containers/App2';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <MuiThemeProvider>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root'));


