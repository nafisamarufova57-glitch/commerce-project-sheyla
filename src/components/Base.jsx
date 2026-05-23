import React from "react";

function Main() {
  return (
    <main className="main">
      <section className="people container">
        <h3 className="title-card">
          What we do to help our customers in digital era.
        </h3>
        <div className="cards-wrapper">
          <div className="card">
            <img className="img-card" src="/people1.png" alt="people1" />
            <h5 className="head-card">Receive</h5>
            <p className="text-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="btn-card">
              Learn more
              <img src="/to-right.png" alt="strelka" />
            </button>
          </div>
          <div className="card">
            <img className="img-card" src="/people2.png" alt="people2" />
            <h5 className="head-card">Send</h5>
            <p className="text-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="btn-card">
              Learn more
              <img src="/to-right.png" alt="strelka" />
            </button>
          </div>
          <div className="card">
            <img className="img-card" src="/people3.png" alt="people3" />
            <h5 className="head-card">Buy</h5>
            <p className="text-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="btn-card">
              Learn more
              <img src="/to-right.png" alt="strelka" />
            </button>
          </div>
          <div className="card">
            <img className="img-card" src="/people1.png" alt="people1" />
            <h5 className="head-card">Receive</h5>
            <p className="text-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="btn-card">
              Learn more
              <img src="/to-right.png" alt="strelka" />
            </button>
          </div>
          <div className="card">
            <img className="img-card" src="/people2.png" alt="people2" />
            <h5 className="head-card">Send</h5>
            <p className="text-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="btn-card">
              Learn more
              <img src="/to-right.png" alt="strelka" />
            </button>
          </div>
          <div className="card">
            <img className="img-card" src="/people3.png" alt="people3" />
            <h5 className="head-card">Buy</h5>
            <p className="text-card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <button className="btn-card">
              Learn more
              <img src="/to-right.png" alt="strelka" />
            </button>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="work-wrapper container">
          <h3 className="work-title">How it works</h3>
          <div className="work-cards">
            <div className="card-work">
              <img src="/work1.png" alt="photo 1" />
              <h5 className="head-work">Create an account</h5>
              <p className="text-work">Lorem ipsum dolor sit amet,</p>
            </div>
            <div className="card-work">
              <img src="/work2.png" alt="photo 2" />
              <h5 className="head-work">Get authorization</h5>
              <p className="text-work">Lorem ipsum dolor sit amet,</p>
            </div>
            <div className="card-work">
              <img src="/work3.png" alt="photo 3" />
              <h5 className="head-work">Enjoy the app</h5>
              <p className="text-work">Lorem ipsum dolor sit amet,</p>
            </div>
          </div>
        </div>
      </section>
      <section className="comment">
        <div className="client wrapper container">
          <h3 className="client-title">What our client say</h3>
          <div className="client-card-wrapper">
            <img className="cl-img" src="/client.png" alt="client's photo" />
            <div className="client-content">
              <img
                className="cl-element"
                src="/client-element.png"
                alt="element"
              />
              <p className="cl-head">
                Amet in elementum nulla scelerisque dui, egestas at. Elit
                consectetur turpis elementum amet vitae et etiam nec. Varius
                volutpat hac adipiscing tincidunt pretium.
              </p>
              <h5 className="cl-name">Angel Paulina</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="down container">
        <div className="right-down">
          <img src="/down.png" alt="phones photo" />
        </div>
        <div className="left-down">
          <h1 className="title-down">Download app to enjoy more!</h1>
          <p className="down-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed
            vulputate vitae velit dictum cursus amet. Turpis donec ut velit
            quis. Cursus commodo, eget urna, sapien amet.{" "}
          </p>
          <div className="down-btns">
            <button className="btn1-down">
              <img src="/google-play.png" alt="Google Play" />
            </button>
            <button className="btn2-down">
              <img src="/app-store.png" alt="App Store" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
