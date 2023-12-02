import React, { useState, useEffect } from 'react';
import WebSocket from 'websocket';

const YourTradeComponent = () => {
  const [tradeData, setTradeData] = useState({});

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  };

  useEffect(() => {
    const socket = new WebSocket.w3cwebsocket('wss://ws.finnhub.io?token=cl65e5hr01ql8jir0680cl65e5hr01ql8jir068g');

    socket.onopen = () => {
      console.log('WebSocket Connection Opened');
      const symbols = ['AAPL', 'MSFT', 'GOOG', 'GS', 'AMZN', 'META', 'TSLA','KO','LUV' ,'TGT' ,'WMT' ,'BRK.A' ,'BRK.B','INTC','HOG','HPQ'];

      symbols.forEach((symbol) => {
        socket.send(JSON.stringify({ type: 'subscribe', symbol }));
      });
    };

    socket.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.log('Message from server:', data);

      if (data.type === 'trade' && Array.isArray(data.data)) {
        const symbol = data.data[0].s;
        const lastTrade = data.data[data.data.length - 1];

        setTradeData((prevData) => {
          return {
            ...prevData,
            [symbol]: lastTrade,
          };
        });
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div style={{ background: '#f0f0f0', padding: '10px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginLeft: '190px', marginTop: '80px', width: '1100px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>Real-time Trade Information</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Company</th>
            <th style={tableHeaderStyle}>Symbol</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Volume</th>
            <th style={tableHeaderStyle}>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tradeData).map(([symbol, trade]) => (
            <tr key={symbol} style={tableRowStyle}>
              <td style={tableCellStyle}>{symbol}</td>
              <td style={tableCellStyle}>{symbol}</td>
              <td style={tableCellStyle}>{trade.p}</td>
              <td style={tableCellStyle}>{trade.v}</td>
              <td style={tableCellStyle}>{formatTimestamp(trade.t)}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'left',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
};

export default YourTradeComponent;
