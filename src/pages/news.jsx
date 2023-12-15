import React, { useEffect, useState } from 'react';

const StockNews = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const PORT = process.env.PORT || 3030;
    fetch(`https://techtrade.onrender.com/news?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error));
  }, [searchTerm]);

  const handleSearch = () => {
  
      let data = news;
     
      const filteredNews = data.filter((item) =>
        item.headline.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setNews(filteredNews);
    
  };

  return (
    <div style={containerStyle}>
      <div style={{display:"flex",justifyContent: "space-between"}}>
      <h2 style={headerStyle}>Stock News</h2>
      <div style={searchContainerStyle}>
        <input
          type="text"
          placeholder="Search company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
        <button onClick={handleSearch} style={searchButtonStyle}>
          Search
        </button>
        </div>
      </div>
      <div style={masonryContainerStyle}>
        {news.map((item, index) => (
          <div key={item.id} style={masonryItemStyle}>
            <div style={cardStyle}>
              <h3 style={titleStyle}>{item.headline}</h3>
              <p style={propertyStyle}><strong>Category:</strong> {item.category}</p>
              <p style={propertyStyle}><strong>Datetime:</strong> {new Date(item.datetime * 1000).toLocaleString()}</p>
              <p style={propertyStyle}><strong>Related:</strong> {item.related}</p>
              <p style={propertyStyle}><strong>Source:</strong> {item.source}</p>
              <p style={propertyStyle}><strong>Summary:</strong> {item.summary}</p>
              {item.image && <img src={item.image} alt={item.headline} style={imageStyle} />}
              <div style={linkContainerStyle}>
                <p style={propertyStyle}><strong>URL:</strong> <a href={item.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>{item.url}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  marginTop:"80px",
  marginLeft :"190px",
  backgroundColor: '#222',
  color: '#fff',
  minHeight: '100vh',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  width: '80vw', // Set width to 100% of viewport width
  borderRadius:"20px",
};

const headerStyle = {
  fontSize: '3em',
  marginBottom: '20px',
  margingLeft:'30px',
};

const searchContainerStyle = {
  fontSize: '3em',
  marginBottom: '20px',
};

const searchInputStyle = {
  padding: '10px',
  marginRight: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '#333',
  color: '#fff',
};

const searchButtonStyle = {
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  cursor: 'pointer',
};

const masonryContainerStyle = {
  columnCount: 3,
  columnGap: '20px',
  width: '100%', // Set width to 100% of the container
};

const masonryItemStyle = {
  marginBottom: '20px',
  breakInside: 'avoid-column',
};

const cardStyle = {
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  width: '100%', // Set width to 100% of the container
  boxSizing: 'border-box', // Include padding in the width
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

const titleStyle = {
  fontSize: '1.5em',
  marginBottom: '10px',
};

const propertyStyle = {
  marginBottom: '8px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '10px',
};

const linkContainerStyle = {
  paddingTop: '15px',
  overflow: 'hidden', // Add this line to prevent overflow
  textOverflow: 'ellipsis', // Add ellipsis for long URLs
  whiteSpace: 'nowrap', // Prevent line breaks
};

const linkStyle = {
  color: '#4CAF50',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default StockNews;
