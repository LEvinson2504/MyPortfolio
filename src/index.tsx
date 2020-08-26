import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter} from "react-router-dom";
import {
  Home, 
  Projects, 
  Nav, 
  Activity,
  MyStuff,
  About
} from "./components";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/activity" component={Activity} />
        <Route path="/mystuff" component={MyStuff} />
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
