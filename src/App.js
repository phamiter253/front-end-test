// Import Style Sheets 
import "./stylesheet.css";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// Import Images
import logo from "./assets/logo/logo-white.svg";
import img1 from "./assets/img/img-1.jpg";
import banner1 from "./assets/img/banner-1.jpg";
import banner2 from "./assets/img/banner-2.jpg";
import icon1 from "./assets/icons/home-expertise.svg";
import icon2 from "./assets/icons/home-hygiene.svg";
import icon3 from "./assets/icons/home-lab.svg";
import icon4 from "./assets/icons/home-retention.svg";

// Import Component
import Carousel from "./components/carousel";



function App() {
  const handleClick = () => {
    console.log("Clicked Button")
  }
  return (
    <div className="App">
      {/* Hero */}
      <div className="hero-image">
        <img className="logo" src={logo} alt="white-logo" width="250vw" />
        <div className="hero-text">
          <h1 className="hero-title1">
            WELCOME TO
            <br />
            <span className="hero-title2">Rooster Grin</span>
          </h1>
          <button className="button1" onClick={handleClick}>
            BUTTON BUTTON
          </button>
        </div>
      </div>

      {/* Section with Small Image */}
      <div className="container">
        <div style={{ padding: "6vw 5vw 2vw 13vw" }}>
          <h1 style={{ fontSize: "3vw", color: "#592c69" }}>LOREM IPSUM</h1>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula, lacus est
            vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem
            tellus suspendisse.
          </p>
          <a href="/">
            <h3 style={{ color: "#592c69" }}>&gt; Lorem Ipsum</h3>
          </a>
        </div>

        <img src={img1} alt="mountain" width="100%" height="100%" />
      </div>


      {/* First Large Image Banner */}
      <div className="banner">
        <img src={banner1} alt="banner1" />
        <div className="left-text">
          <h1 style={{ fontSize: "3vw", color: "#592c69" }}>LOREM IPSUM</h1>
          <button className="button2" onClick={handleClick}>
            BUTTON BUTTON
          </button>
        </div>
      </div>


      {/* Section with Four Icons */}
      <div className="container">
        <div style={{ padding: "8vw 5vw 6vw 13vw" }}>
          <h1 style={{ fontSize: "3vw" }}>
            LOREM IPSUM
            <br />
            DOLOR SIT AMET
          </h1>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula.
          </p>
          <a href="/">
            <h3 style={{ color: "#592c69" }}>&gt; Lorem Ipsum</h3>
          </a>
        </div>
        <div>
          <div className="grid">
            <div>
              <svg viewBox="0 0 60 60">
                <defs>
                  <clipPath id="circleView">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      fill="none"
                      stroke="#FF62E1"
                      strokeWidth="1"
                    />
                  </clipPath>
                </defs>
                <image
                  x="11"
                  y="10"
                  width="28"
                  height="28"
                  xlinkHref={icon1}
                  clipPath="url(#circleView)"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#9964aa"
                  strokeWidth="0.5"
                ></circle>
                <text x="12" y="60" className="grid-text">
                  LOREM
                </text>
              </svg>
            </div>

            <div>
              <svg viewBox="0 0 60 60">
                <defs>
                  <clipPath id="circleView">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      fill="none"
                      stroke="#FF62E1"
                      strokeWidth="1"
                    />
                  </clipPath>
                </defs>
                <image
                  x="11"
                  y="10"
                  width="28"
                  height="28"
                  xlinkHref={icon2}
                  clipPath="url(#circleView)"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#9964aa"
                  strokeWidth="0.5"
                ></circle>
                <text x="0" y="60" className="grid-text">
                  LOREM IPSUM
                </text>
              </svg>
            </div>

            <div>
              <svg viewBox="0 0 60 60">
                <defs>
                  <clipPath id="circleView">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      fill="none"
                      stroke="#FF62E1"
                      strokeWidth="1"
                    />
                  </clipPath>
                </defs>
                <image
                  x="11"
                  y="10"
                  width="28"
                  height="28"
                  xlinkHref={icon3}
                  clipPath="url(#circleView)"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#9964aa"
                  strokeWidth="0.5"
                ></circle>
                <text x="0" y="60" className="grid-text">
                  LOREM IPSUM
                </text>
              </svg>
            </div>

            <div>
              <svg viewBox="0 0 60 60">
                <defs>
                  <clipPath id="circleView">
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      fill="none"
                      stroke="#FF62E1"
                      strokeWidth="1"
                    />
                  </clipPath>
                </defs>
                <image
                  x="11"
                  y="10"
                  width="28"
                  height="28"
                  xlinkHref={icon4}
                  clipPath="url(#circleView)"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  fill="none"
                  stroke="#9964aa"
                  strokeWidth="0.5"
                ></circle>
                <text x="12" y="60" className="grid-text">
                  LOREM
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>


      {/* Second Large Image Banner */}
      <div className="banner">
        <img src={banner2} alt="banner2" />
        <div className="right-text" style={{ paddingRight: "2vw" }}>
          <h1 style={{ fontSize: "3vw", color: "#592c69" }}>LOREM IPSUM</h1>
          <p>
            Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
            magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
            ut pede ut ante, in viverra eros dictum nisl ligula.
          </p>
          <button className="button2" onClick={handleClick}>
            BUTTON BUTTON
          </button>
        </div>
      </div>


      {/* Section with Carousel */}
      <div className="container">
        <div style={{ padding: "10vw 5vw 6vw 13vw" }}>
          <h1 style={{ fontSize: "3vw", marginBottom: "0.5vw" }}>
            LOREM IPSUM
            <br />
            DOLOR SIT AMET
          </h1>
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
        </div>

        <Carousel>
          <div className="carousel-item">
            <p>
              <span className="heading">John Doe 08/08/2019</span>
              <br/>
              <br/>
              Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
              ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum 
              dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
              ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in.
            </p>
          </div>
          <div className="carousel-item">
            <p>
              <span className="heading">Jane Doe 09/08/2019</span>
              <br/>
              <br/>
              Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
              ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum 
              dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
              ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in.
            </p>
          </div>
          <div className="carousel-item">
            <p>
              <span className="heading">John Doe 10/08/2019</span>
              <br/>
              <br/>
              Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
              ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum 
              dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam,
              ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl
              magna est sociis, neque in.
            </p>
          </div>
        </Carousel>
        
      </div>


      {/* Footer */}
      <h2 style={{fontSize: "1vw"}}>Follow Us:</h2>
      <div className="footer">
        <a href="https://www.instagram.com/">
          <svg
            id="b6a437d6-3521-44ad-aa1a-e256c427128c"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="3vw"
          >
            <title>instagram</title>
            <path
              d="M13.14,49.37A12.42,12.42,0,0,1,.68,37L.63,13.15A12.4,12.4,0,0,1,13,.69L36.85.63A12.44,12.44,0,0,1,49.31,13l.07,23.85A12.45,12.45,0,0,1,37,49.32ZM36.89,1.61,13,1.68A11.42,11.42,0,0,0,1.61,13.14L1.67,37A11.43,11.43,0,0,0,13.1,48.39L37,48.33A11.46,11.46,0,0,0,48.39,36.86L48.32,13A11.44,11.44,0,0,0,36.89,1.61ZM13.13,46.12A9.16,9.16,0,0,1,3.94,37L3.88,18.56H17.25l-.74.82a11.4,11.4,0,1,0,17,0l-.74-.82H46.07l0,18.31A9.17,9.17,0,0,1,37,46.06ZM4.88,19.55,4.92,37a8.18,8.18,0,0,0,8.17,8.15L37,45.08a8.18,8.18,0,0,0,8.15-8.2l0-17.33H34.9a12.39,12.39,0,1,1-19.81,0ZM25,36.11A9.13,9.13,0,1,1,34.13,27h0A9.13,9.13,0,0,1,25,36.11Zm0-17.27a8,8,0,0,0-3.23.67A8.14,8.14,0,1,0,33.14,27h0A8.16,8.16,0,0,0,25,18.84ZM42,15.6H36.66a.78.78,0,0,1-.77-.77V9.45a.78.78,0,0,1,.77-.77h3.83A2.31,2.31,0,0,1,42.8,11v3.83A.78.78,0,0,1,42,15.6Zm-5.16-1h4.94V11a1.33,1.33,0,0,0-1.32-1.32H36.87Z"
              style={{ fill: "#9964aa" }}
            />
          </svg>
        </a>
        <a href="https://www.facebook.com/">
          <svg
            id="72999efa-835b-4741-88fc-8e3296749d22"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="3vw"
          >
            <title>facebook</title>
            <path
              d="M28.44,45.1l-7.95,0V28.12H14.88V20.5h5.66c0-.1,0-.19,0-.29,0-.58,0-1.16,0-1.74,0-1.31,0-2.66.11-4A7.89,7.89,0,0,1,26.4,7.37,17.07,17.07,0,0,1,32.53,7l1.16.07c.23,0,.46,0,.7.08l.73.09V14.1H33.21l-.82,0c-.72,0-1.46,0-2.17.1-1.09.11-1.59.56-1.67,1.5-.09,1.2-.07,2.39,0,3.65,0,.38,0,.76,0,1.15H35l-.25,1.9c-.21,1.68-.43,3.31-.66,4.95a1.08,1.08,0,0,1-1,.78c-.8,0-1.61,0-2.42,0H28.44Zm-6.95-1,5.95,0V27.15h3.28c.8,0,1.59,0,2.39,0,0,0,0,0,0,0,.23-1.59.43-3.19.64-4.83l.1-.77H27.51V21c0-.55,0-1.09,0-1.63,0-1.29,0-2.5.05-3.75a2.5,2.5,0,0,1,2.56-2.42c.75-.08,1.52-.09,2.26-.1l.81,0h.94v-5l-.47,0L32.47,8a16.09,16.09,0,0,0-5.78.33,6.91,6.91,0,0,0-5,6.22c-.09,1.3-.1,2.64-.11,3.93,0,.58,0,1.17,0,1.75,0,.16,0,.33,0,.51v.76H15.88v5.62h5.62Z"
              style={{ fill: "#9964aa" }}
            />
            <path
              d="M39.76,1.63a8.61,8.61,0,0,1,8.6,8.6V39.76a8.61,8.61,0,0,1-8.6,8.6H10.24a8.61,8.61,0,0,1-8.6-8.6V10.24a8.61,8.61,0,0,1,8.6-8.6H39.76m0-1H10.24A9.61,9.61,0,0,0,.62,10.24V39.76a9.61,9.61,0,0,0,9.61,9.61H39.76a9.61,9.61,0,0,0,9.61-9.61V10.24A9.61,9.61,0,0,0,39.76.62Z"
              style={{ fill: "#9964aa" }}
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
