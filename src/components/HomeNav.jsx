import React from "react";
import svgImage from "../assets/Vector (1).svg";
import "../styles/HomeNav.css";
import ticz from "../assets/ticz.svg";
import arrow from "../assets/div.svg"
import { Link } from "react-router";

export default function HomeNav() {
  return (
    <>
      <nav>
        <div className="ticz-box">
          <div className="navImageDiv">
            <img src={svgImage} alt="" className="navImage" />
          </div>
          
          <p className="ticz-text">GenTix  </p>
        </div>
        {/* this is for the nav links  */}
        <div className="nav-links">
          <a href="" className="first-link">Program</a>
          <a href="" className="second-link">Price</a>
          <Link to="/about" className="third-link">Speakers</Link>

        </div>
        <a href="" className="my-ticket-btn">Log in</a>

      </nav>
    </>
  );
}
