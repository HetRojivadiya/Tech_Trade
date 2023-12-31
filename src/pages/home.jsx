import "./style.css";
import React from "react";

export default function Home({ addLike }) {
  

  const stockData = [
    {
      stockCode: "TCS",
      stockVariation: "+3.25%",
      stockPrice: "₹ 4,500.75",
    },
    {
      stockCode: "HDFCBANK",
      stockVariation: "+2.05%",
      stockPrice: "₹ 1,800.25",
    },
    {
      stockCode: "RELIANCE",
      stockVariation: "+1.97%",
      stockPrice: "₹ 2,250.50",
    },
    {
      stockCode: "INFY",
      stockVariation: "+1.37%",
      stockPrice: "₹ 2,300.10",
    },
    {
      stockCode: "ICICIBANK",
      stockVariation: "+1.10%",
      stockPrice: "₹ 1,000.75",
    },
    {
      stockCode: "SBI",
      stockVariation: "-7.70%",
      stockPrice: "₹ 250.35",
    },
    {
      stockCode: "ITC",
      stockVariation: "-5.72%",
      stockPrice: "₹ 220.65",
    },
    {
      stockCode: "ONGC",
      stockVariation: "-4.08%",
      stockPrice: "₹ 140.20",
    },
    {
      stockCode: "HINDUNILVR",
      stockVariation: "-3.87%",
      stockPrice: "₹ 2,400.75",
    },
    {
      stockCode: "LT",
      stockVariation: "-3.77%",
      stockPrice: "₹ 1,300.50",
    },
  ];

  const stocks = [
    {
      name: "Reliance",
      image: "/images/reliance.png",
      price: "Rs.1600", // Increased by Rs.100
      change: "-5.00%", // Indicates a decrease of 2.70%
    },
    {
      name: "Zomato",
      image: "/images/zomato.png",
      price: "Rs.1450", // Decreased by Rs.50
      change: "-15.00%", // Indicates a decrease of 7.30%
    },
    {
      name: "TATA",
      image: "/images/tata.png",
      price: "Rs.1700", // Increased by Rs.200
      change: "+12.00%", // Indicates an increase of 19.70%
    },
    {
      name: "Adani",
      image: "/images/adani.png",
      price: "Rs.1400", // Decreased by Rs.100
      change: "-20.00%", // Indicates a decrease of 12.30%
    },
    {
      name: "MRF",
      image: "/images/mrf.png",
      price: "Rs.1550", // Increased by Rs.50
      change: "+3.00%", // Indicates an increase of 10.70%
    },
  ];

  const search = ()=>{
    console.log("haha");
  }

  return (
    <>
      <div id="wrapper">
        <div id="top">
          <div id="title">
            <h1>TechTrade</h1>
            <h2>Dashboard for Investors</h2>
          </div>

          <div id="search">
            <input
              type="text"
              placeholder="search"
              id="search-input"
              
            />
            <button onClick={search()} id="search-button">
              <ion-icon name="search"></ion-icon>
            </button>
          </div>
        </div>

        <div id="boxes">
          <div id="highest">
            <h3 className="box-title">
              <ion-icon name="arrow-up"></ion-icon>
              Top Gainer
            </h3>
            {stockData
              .filter((stock) => stock.stockVariation.includes("+"))
              .map((stock, index) => (
                <>
                  <a key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="stock-summary" style={{ flex: 30 }}>
                        <div className="stock-code">
                          <p>{stock.stockCode}</p>
                        </div>
                        <div className="stock-variation">
                          <p>{stock.stockVariation}</p>
                        </div>
                        <div className="stock-price">
                          <p>{stock.stockPrice}</p>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <button
                          style={{
                            border: "none", // Remove border
                            background: "none", // Remove background color
                            color: "inherit", // Inherit text color
                            padding: 0, // Remove padding
                            font: "inherit", // Inherit font properties
                            cursor: "pointer", // Add pointer cursor
                            marginLeft: "8px",
                          }}
                          onClick={() => addLike(stock)}
                        >
                          <ion-icon
                            name="heart"
                            style={{ color: "var(--white)" }}
                          ></ion-icon>
                        </button>
                      </div>
                    </div>
                  </a>
                </>
              ))}
          </div>

          <div id="lowest">
            <h3 className="box-title">
              <ion-icon name="arrow-down"></ion-icon>
              Top Losser
            </h3>
            {stockData
              .filter((stock) => stock.stockVariation.includes("-"))
              .map((stock, index) => (
                <>
                  <a key={index}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="stock-summary" style={{ flex: 30 }}>
                        <div className="stock-code">
                          <p>{stock.stockCode}</p>
                        </div>
                        <div className="stock-variation">
                          <p>{stock.stockVariation}</p>
                        </div>
                        <div className="stock-price">
                          <p>{stock.stockPrice}</p>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <button
                          style={{
                            border: "none", // Remove border
                            background: "none", // Remove background color
                            color: "inherit", // Inherit text color
                            padding: 0, // Remove padding
                            font: "inherit", // Inherit font properties
                            cursor: "pointer", // Add pointer cursor
                            marginLeft: "8px",
                          }}
                          onClick={() => addLike(stock)}
                        >
                          <ion-icon
                            name="heart"
                            style={{ color: "var(--white)" }}
                          ></ion-icon>
                        </button>
                      </div>
                    </div>
                  </a>
                </>
              ))}
          </div>

          <div id="title" style={{ marginTop: "20px" }}>
            <h2>Most Bought on Today</h2>
          </div>

          <div id="full-box">
            <div style={{ display: "flex", padding: "20px" }}>
              {stocks.map((stock, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    background: "gray",
                    borderRadius: "10px",
                    marginRight: "20px",
                  }}
                >
                  <img src={stock.image} width={"80px"} height={"80px"} />
                  <p>{stock.name}</p>
                  <br />
                  <p>price : {stock.price}</p>
                  <p>{stock.change}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="push"></div>
      </div>
    </>
  );
}
