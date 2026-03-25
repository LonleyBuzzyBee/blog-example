import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import Nav_Bar from "./components/navbar";
import Banner from './components/banner';
import Copyright_footer from './components/copyright-footer';
import { getAppBasename } from './getAppBasename';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/scss/main.scss';

const basename = getAppBasename() || undefined;
if (typeof window !== 'undefined' && basename) {
  const { pathname, search, hash } = window.location;
  if (pathname === '/' || pathname === '') {
    window.history.replaceState(null, '', `${basename}/${search}${hash}`);
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <div className="App">
        <Banner />
        <Nav_Bar />
        <div className="app-content">
          <App />
        </div>
        <Copyright_footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
