import React from 'react';
import './footer.css';

const YourComponent = () => {
  return (
    <div className="row">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Company</h4>
              <nav>
                <a href="#">About Us</a>
                <a href="#">Our Services</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Affiliate Program</a>
              </nav>
            </div>
            <div className="footer-col">
              <h4>Get help</h4>
              <nav>
                <a href="#">FAQ</a>
                <a href="#">Shipping</a>
                <a href="#">Returns</a>
                <a href="#">Order Status</a>
                <a href="#">Payment Options</a>
              </nav>
            </div>
            <div className="footer-col">
              <h4>Online shop</h4>
              <nav>
                <a href="#">Play Stations</a>
                <a href="#">Controllers</a>
                <a href="#">Watch</a>
                <a href="#">Bag</a>
              </nav>
            </div>
            <div className="footer-col">
              <h4>Follow us</h4>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YourComponent;
