import React from 'react';

const Indicators = ({data,filterValue,handleFilterChange,filteredDataKeys}) => {


  const containerStyle = {
    maxWidth: '1100px',
    margin: '50px auto',
    padding: '10px',
    marginTop:'-580px',
    marginLeft:'190px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 1s ease-in-out',
  };

  const headerContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
  };

  const dropdownStyle = {
   color: '#000', // Change this color to the desired color for the dropdown text
  backgroundColor: '#fff', // Change this color to the desired background color for the dropdown
  border: '1px solid #ccc', // Add a border for better visibility
  padding: '5px', // Add some padding for aesthetics
  marginRight: '10px',
  };

  const dataContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const stockInfoStyle = {
    backgroundColor: '#f4f4f4',
    padding: '8px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    width: 'calc(33.33% - 10px)',
    color: '#333',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  };

  const h2Style = {
    marginBottom: '6px',
    fontSize: '1em',
    borderBottom: '1px solid #764ba2',
    paddingBottom: '2px',
    color: '#333',
  };

  const pStyle = {
    margin: '2px 0',
    color: '#555',
    fontSize: '0.85em',
  };

  const NoDataFoundImage = () => (
    <div style={{ textAlign: 'center', marginLeft: '90px',margin:"100px",marginTop:"-10px" }}>
      <img src="https://cdn3.iconfinder.com/data/icons/emotions-5/900/emotions-reactions-sad-face-sad-512.png" alt="No data found" width="200px" />
      <p>Sorry we couldn't find any results</p>
    </div>
  );

  return (
    <div style={containerStyle}>
      <div style={headerContainerStyle}>
        <h1 style={{ margin: 0 }}><img src="https://cdn.worldvectorlogo.com/logos/nifty50.svg" alt="Nifty" width={"180px"}/></h1>
        <div>
          <h3 style={{ color: '#fff', marginBottom: '5px' }}>Filter by RSI:</h3>
          <select style={dropdownStyle} value={filterValue} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="lessThan30">RSI Less than 30</option>
          <option value="greaterThan30AndLessThan60">RSI Greater than 30 and Less than 60</option>
          <option value="greaterThanOrEqualTo60">RSI Greater than or equal to 60</option>
        </select>
        </div>
      </div>
      <div style={dataContainerStyle}>
      {filteredDataKeys && filteredDataKeys.length === 0 ? (
          <NoDataFoundImage/>
        ) : (
        filteredDataKeys.map((symbol) => (
          <div key={symbol} style={stockInfoStyle}>
            <h2 style={h2Style}>{symbol}</h2>
            <p style={pStyle}>EMA10: {data[symbol]?.EMA10.toFixed(4)}</p>
            <p style={pStyle}>RSI: {data[symbol]?.RSI.toFixed(4)}</p>
          </div>
        ))

        )}
      </div>
    </div>
  );
};

export default Indicators;
