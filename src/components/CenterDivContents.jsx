import "../styles/CenterDiv.css";
import guy from "../assets/guy.png";
import { Link } from "react-router-dom";
function HomeContents() {
  return (
    <>
    <section>
      <div className="homeDiv">
        <p className="date">June 10, 2025,Nigeria</p>
        <h1 className="contentH1">
          <span>TechemberFest</span> 2025 Conference
        </h1>
        <p className="join">
          Join us for an unforgettable experience at UI Conference Hall! Secure
          your spot now.
        </p>
      </div>
      <div className="linkDiv">
        
        <Link to="/select" className="buyLink">
        Buy Tickets
        </Link>   
      </div>
      <div className="card-container">
        <div className="card card1">
          <img src={guy} alt="" />
          <div className="cardText">
            <p className="full">#Fullstack Developer</p>
            <p>Scraping Imposter Syndrome</p>

            <a href="Discord" className="dis">
              Discord
            </a>
            <a href="LinkedIn">LinkedIn</a>
          </div>
        </div>
        <div className="card card2">
          <img src={guy} alt="" />
          <div className="cardText">
            <p className="full">#Fullstack Developer</p>
            <p>Scraping Imposter Syndrome</p>
          <div className="links">
            <a href="Discord" className="dis">
              Discord
            </a>
            <a href="LinkedIn">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="card card3">
          <img src={guy} alt="" />
          <div className="cardText">
            <p className="full">#Fullstack Developer</p>
            <p>Scraping Imposter Syndrome</p>

            <a href="Discord" className="dis">
              Discord
            </a>
            <a href="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
export default HomeContents;
