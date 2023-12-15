import React from 'react';
import {HashRouter ,Link, Route,Routes } from 'react-router-dom';
import "./style.css";
import App from '../App'
import Indicators from './indicators'
import TradingChart from './chart';
import About from './about.jsx'
import {useState,useEffect} from 'react'

export default function Header() {

  const [data, setData] = useState({});
  const [filterValue, setFilterValue] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://techtrade-indicators-default-rtdb.firebaseio.com/.json");
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); // Initial data fetch
  
    const interval = setInterval(() => {
      fetchData(); // Fetch data every 5 minutes
    }, 5 * 60 * 1000);
  
    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredDataKeys = Object.keys(data).filter((symbol) => {
    if (filterValue === 'lessThan30') {
      return data[symbol]?.RSI < 30;
    } else if (filterValue === 'greaterThan30AndLessThan60') {
      return data[symbol]?.RSI >= 30 && data[symbol]?.RSI < 60;
    } else if (filterValue === 'greaterThanOrEqualTo60') {
      return data[symbol]?.RSI >= 60;
    }
    return true;
  });

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
      <Route path="/indicators"  element={<Indicators data={data} filterValue={filterValue} handleFilterChange={handleFilterChange} filteredDataKeys={filteredDataKeys} />} />
      <Route path="/about" element={<About/>} /> 
      </Routes>
    </HashRouter>
  );
}
