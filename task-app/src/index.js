import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './home'
import { Router, Link } from "@reach/router"
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
    <Router>
      {/* <Home path="/"/> */}
      <App path="/app"/>
    </Router>,
  document.getElementById('root')
);
