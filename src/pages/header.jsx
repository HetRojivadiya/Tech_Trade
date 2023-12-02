import React from 'react';
import {HashRouter ,Link, Route,Routes } from 'react-router-dom';
import "./style.css";
import App from '../App'
import Indicators from './indicators'
import TradingChart from './chart';
import About from './about.jsx'

export default function Header() {
  return (
    <HashRouter>
      <nav>
        <div id="menu">
          <Link to="/"><ion-icon name="home" className="current-icon"></ion-icon></Link>
          <Link to="/charts"><ion-icon name="bar-chart"></ion-icon></Link>
          <Link to="/indicators"><ion-icon name="options"></ion-icon></Link>
          <Link to="/about"><ion-icon name="help-circle"></ion-icon></Link>
        </div>
      </nav>

      <Routes>
      <Route path="/" exact element={<App/>} />
      <Route path="/charts" element={<TradingChart/>} />
      <Route path="/indicators" element={<Indicators/>} />
      <Route path="/about" element={<About/>} /> 
      </Routes>
    </HashRouter>
  );
}
