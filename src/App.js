import logo from './logo.svg';
import './App.css';
import Header from './pages/header.jsx';
import Home from './pages/home'
import StockPriceData from './pages/test';
import StockChart from './pages/stockChart.jsx';
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <StockChart/> 
    <StockPriceData/>
    
    </>
    
  );
}

export default App;
