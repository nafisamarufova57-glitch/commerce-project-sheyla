import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="last">
        <div className="last-wrapper container">
          <div className="top">
            <div className="first">
              <a href="/index.html">
                <img src="/logo2.png" alt="white logo" />
              </a>
            </div>
            <div className="second">
              <h4 className="line-title">Quick Links</h4>
              <div className="lines-wrapper">
                <p>Sign Up</p>
                <p>About Us</p>
              </div>
            </div>
            <div className="third">
              <h4 className="line-title">Others</h4>
              <div className="lines-wrapper">
                <p>User FAQs</p>
                <p>Contact Us</p>
                <p>Legal</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
              </div>
            </div>
            <div className="fourth">
              <h4 className="line-title">Products</h4>
              <div className="lines-wrapper">
                <p>Send</p>
                <p>Receive</p>
                <p>Buy</p>
              </div>
            </div>
            <div className="fifth"></div>
          </div>
        </div>
      </div>
      <div className="last-wrapper2 container">
        <div className="bottom">
          <p>Copyright © 2020. All rights reserved.</p>
          <img src="/icons.png" alt="icons" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
