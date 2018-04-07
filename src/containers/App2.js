


import React, { Component } from 'react';

import MiniDrawer from './MiniDrawer';


//import AppBarExampleIcon from "./Appbar"
import { BrowserRouter } from 'react-router-dom';
//import {Router, Route, browserHistory, IndexRoute} from "react-router";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
        <MiniDrawer />
        </BrowserRouter >




      </div>
    );
  }
}

export default App;
