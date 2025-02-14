import React from "react";
import svgImage from "../assets/Vector (1).svg";
import "../styles/NavBar.css";
import ticz from "../assets/ticz.svg";
import arrow from "../assets/div.svg"

export default function Nav() {
  return (
    <>
      <nav>
        <div className="ticz-box">
          <div className="navImageDiv">
            <img src={svgImage} alt="" className="navImage" />
          </div>
          <img src={ticz} alt="" className="ticz-text"/>
        </div>
        {/* this is for the nav links  */}
        <div className="nav-links">
          <a href="" className="first-link">Events</a>
          <a href="" className="second-link">My Tickets</a>
          <a href="" className="third-link">About Project</a>

        </div>
        <a href="" className="my-ticket-btn">MY TICKETS <img src={arrow}alt="" /></a>

      </nav>
    </>
  );
}
