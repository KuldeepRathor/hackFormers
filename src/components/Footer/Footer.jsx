import React from "react";
import logo from "./avalon-logo.png";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className=" main-footer-cointainer">
        <div className="footer-logo">
          <img src={logo}></img>
        </div>
        <div className="explore-section">
          <div className="footer-heading">
            <h3>Explore</h3>
          </div>
          <div className="footer-list">
            <a>About</a>
            <a>Faq</a>
            <a>Footer</a>
            <a>Hero</a>
            <a>Prizes</a>
            <a>Schedule</a>
            <a>Sponsors</a>
            <a>Tracks</a>
          </div>
        </div>
        <div className="social-link">
          <div className="footer-heading">
            <h3>Follow us</h3>
          </div>
          <div className="footer-list">
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Linkedin</a>
            <a>Email</a>
          </div>
        </div>
      </div>
      <div className="copyright-sec">Copyright reserved !!!</div>
    </div>
  );
}

export default Footer;
