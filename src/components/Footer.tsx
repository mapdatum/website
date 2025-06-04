import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="geometric-bg"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-branding">
            <h3 className="footer-logo">MapDatum</h3>
            <p className="footer-tagline">Mapping data, connecting insights</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Explore</h4>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <a href="mailto:info@mapdatum.com">Email</a>
              <a href="https://twitter.com/mapdatum">Twitter</a>
              <a href="https://linkedin.com/company/mapdatum">LinkedIn</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MapDatum. All rights reserved.</p>
            <div className="floating-map-pin">📍</div>
            <div className="floating-map-pin">🗺️</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 