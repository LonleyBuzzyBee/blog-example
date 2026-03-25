import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import Nav_Bar from "./components/navbar";
import Banner from './components/banner';
import Copyright_footer from './components/copyright-footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/main.scss';


  
ReactDOM.render(
  <React.StrictMode>
     <div className="App">
      <Banner />
      <Nav_Bar/>
      <div className="app-content">
        <App />
      </div>
      <Copyright_footer/>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
