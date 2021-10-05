import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container foot-container">
        <div className="foot-start">
          <h1>e-Learning Website</h1>
          <p>The more that you read, the more things you will know.</p>
        </div>

        <div className="foot-middle">
          <h4>Copyright ©2021 All rights reserved</h4>
        </div>

        <div className="foot-end">
          <p>Contact Us</p>
          <p>+60145454544</p>
          <address>
            Address:
            <p>123 Main Street, New York, NY 10030</p>
          </address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
