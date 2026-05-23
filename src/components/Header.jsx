import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="nav container">
        <img src="../public/logo.svg" alt="logo" />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact us</a>
        </div>
      </div>
      <div className="hero container">
        <div className="left-hero">
          <h1 className="title-hero">
            New <span className="hero-t">E-commerce App</span> best for You
          </h1>
          <p className="hero-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed
            vulputate vitae velit dictum cursus amet. Turpis donec ut velit
            quis. Cursus commodo, eget urna, sapien amet.{" "}
          </p>
          <div className="store-btns">
            <button className="btn1">
              <img src="/google-play.png" alt="Google Play" />
            </button>
            <button className="btn2">
              <img src="/app-store.png" alt="App Store" />
            </button>
          </div>
        </div>
        <div className="right-hero">
          <img src="/phones.png" alt="phones photo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
