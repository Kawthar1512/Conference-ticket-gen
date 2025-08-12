import "../styles/CenterDiv.css";
import guy from "../assets/guy.png";
import guy2 from "../assets/man4.png";
import guy3 from "../assets/dim.png";

import { Link } from "react-router-dom";
function HomeContents() {
  return (
    <>
      <section>
        <div className="homeDiv">
          <p className="date text-sm uppercase tracking-widest text-gray-300">
            June 10, 2025 • Lagos, Nigeria
          </p>
          <h1 className="contentH1">
            <span>DevConnect</span> 2025 Conference
          </h1>
          <p className="join">
            Join us for an unforgettable experience at UI Conference Hall!
            Secure your spot now.
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
              <p className="full">#Designer</p>
              <p>• Consistency</p>
              <div className="minn">
                <a href="Discord">Discord</a>
                <a href="LinkedIn">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="card card2">
            <img src={guy2} alt="" />
            <div className="cardText">
              <p className="full">#Fullstack Developer</p>
              <p className="dot">• Scraping Imposter Syndrome</p>
              <div className="links">
                <a href="Discord" className="dis">
                  Discord
                </a>
                <a href="LinkedIn">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="card card3">
            <img src={guy3} alt="" />
            <div className="cardText">
              <p className="full">#Fullstack Developer</p>
              <p>• Show your Work</p>

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
