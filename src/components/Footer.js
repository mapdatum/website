import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} MapDatum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 