import React, { useEffect, useRef, useState } from "react";
import Chart from "react-apexcharts";

const StockChart = () => {
  const chartRef = useRef();
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedInterval, setSelectedInterval] = useState("D"); // Default to Daily

  const stocks = [
    { description: "VANGUARD TOTAL INTL STOCK", symbol: "VXUS" },
    { description: "KKR REAL ESTATE FINANCE TRUS", symbol: "KREF" },
    { description: "TROILUS GOLD CORP", symbol: "CHXMF" },
    { description: "SUNTORY BEVERAGE \u0026 FOOD-UADR", symbol: "STBFY" },
    { description: "Lehman Brothers Financial SA", symbol: "LEHNQ" },
    { description: "PIONEER BANCORP INC/NY", symbol: "PBFS" },
    { description: "INVESCO S\u0026P INTERNATIONAL DE", symbol: "IDHQ" },
    { description: "RED CAT HOLDINGS INC", symbol: "RCAT" },
    { description: "CHINA TELETECH HOLDING INC", symbol: "CNCT" },
    { description: "RESILIENT REIT LTD", symbol: "RLNTF" },
    { description: "DAVIDSTEA INC", symbol: "DTEAF" },
  ];

  useEffect(() => {
    // Set the first option as the default selected value
    setSelectedDescription(stocks[0].description);
    setSelectedStock(stocks[0]);
  }, []);

  // Fetch data when the component mounts and when the dropdown selection changes
  useEffect(() => {
    fetchData();
  }, [selectedStock, selectedInterval]); // Re-run the effect if selectedStock or selectedInterval changes

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/stockCandles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: selectedDescription,
          symbol: selectedStock.symbol,
          interval: selectedInterval,
        }),
      });
      const fetchedData = await response.json();
      console.log("Fetched data:", fetchedData);
      if (fetchedData.s !== "no_data") {
        setStockData(fetchedData);
      }
      
    } catch (error) {
      setError("Failed to fetch stock data");
    } finally {
      setLoading(false);
    }
  };

  const handleDescriptionChange = (event) => {
    const selectedDesc = event.target.value;
    const selectedStock = stocks.find(
      (stock) => stock.description === selectedDesc
    );
    setSelectedDescription(selectedDesc);
    setSelectedStock(selectedStock);
    fetchData(); // Fetch data when the dropdown selection changes
  };

  const handleIntervalChange = (event) => {
    const selectedInterval = event.target.value;
    setSelectedInterval(selectedInterval);
    fetchData(); // Fetch data when the interval selection changes
  };

  return (
    <div style={{ marginLeft: "200px", marginTop: "120px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", marginBottom: "10px" ,marginLeft:"70px"}}>
        <select
          value={selectedDescription}
          onChange={handleDescriptionChange}
          style={{
            padding: '4px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#333',
            marginRight: "10px",
          }}
        >
          {stocks.map((stock, index) => (
            <option key={index} value={stock.description}>
              {stock.description}
            </option>
          ))}
        </select>

        <select
          value={selectedInterval}
          onChange={handleIntervalChange}
          style={{
            padding: '5px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            backgroundColor: '#fff',
            color: '#333',
          }}
        >
          <option value="1">1 Minute</option>
          <option value="5">5 Minutes</option>
          <option value="15">15 Minutes</option>
          <option value="30">30 Minutes</option>
          <option value="60">1 Hour</option>
          <option value="D">Daily</option>
          <option value="W">Weekly</option>
          <option value="M">Monthly</option>
        </select>
      </div>


      {loading && <div>Loading...</div>}

      {stockData && (
        <div>
          <Chart
            options={{
              chart: {
                type: "candlestick",
              },
            }}
            series={[
              {
                data: stockData.c.map((value, index) => ({
                  x: new Date(stockData.t[index] * 900),
                  y: [
                    stockData.o[index],
                    stockData.h[index],
                    stockData.l[index],
                    stockData.c[index],
                  ],
                })),
              },
            ]}
            type="candlestick"
            width="900"
          />
        </div>
      )}
    </div>
  );
};

export default StockChart;
