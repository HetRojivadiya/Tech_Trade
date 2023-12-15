import React from 'react';

const AboutPage = () => {
  const styles = {
    aboutPage: {
      width :'85%',
      marginTop: '-600px',
      marginLeft: '190px',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: 'black',
      padding: '20px',
      boxSizing: 'border-box',
      borderRadius: '50px',
    },
    companyInfo: {
      textAlign: 'center',
      maxWidth: '1100px',
      margin: '0 auto',
    },
    pageTitle: {
      fontSize: '3em',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: 'transparent',
      backgroundImage: 'linear-gradient(90deg, #2962ff, #2962ff 6.02%, #726fff 28.12%, #c883ff 41.15%, #ab4df8 54.69%, #d1007e 69.27%, #dc132b 90.9%, #dc132b)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      textFillColor: 'transparent',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.6',
      color: '#555',
    },
  };

  const containerStyle = {
    marginTop: '10px',
    marginLeft :'190px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    width:'85%'
  };

  const contentStyle = {
    maxWidth: '50%',
    padding: '20px',
    boxSizing: 'border-box',
    color:'#fff',
    textAlign:'left'
  };

  const imageStyle = {
    maxWidth: '50%',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <>
      <div style={styles.aboutPage}>
        <div style={styles.companyInfo}>
          <h1 style={styles.pageTitle}>Welcome to Our Trading Company</h1>
          <p style={styles.paragraph}>
            Here you can describe your company, its mission, vision, team, and more.
            Feel free to include any additional information you'd like to share.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>

      {/* First additional container */}
      <div style={{ ...containerStyle, flexDirection: 'row-reverse', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <img src="/images/about1.jpg" alt="Left Image" style={{ ...imageStyle }} />
        <div style={{ ...contentStyle, textAlign: 'left' }}>
          <h2 style={{color:"black"}}>Market in Snapshot</h2>
          <p style={{color:"black"}}>
            Simplified enough for beginners.<br/>
            Detailed enough for experts.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>

      {/* Second additional container */}
      <div style={{ ...containerStyle, flexDirection: 'row', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <img src="/images/about2.jpg" alt="Right Image" style={{ ...imageStyle }} />
        <div style={{ ...contentStyle, textAlign: 'left' }}>
          <h2 style={{color:"black"}}>Your Content Title</h2>
          <p style={{color:"black"}}>
            Your content description goes here. You can describe your trading company,
            its history, values, or any other relevant information.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
