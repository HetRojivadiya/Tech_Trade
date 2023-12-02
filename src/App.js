import logo from './logo.svg';
import './App.css';

import Home from './pages/home'
import StockPriceData from './pages/test';
import TradeDetails from './pages/RealTimeTrade';

import { useState } from 'react';


function App() {

  const [addLike,setLike] = useState([]);
  return (
    <>
    
    <Home addLike={addLike}/>
    <TradeDetails/>
  
  
    <StockPriceData/>
    </>
  );
}

export default App;
