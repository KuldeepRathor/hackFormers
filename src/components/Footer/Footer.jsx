import React from "react";
import discordimg from "../../assets/discord.png"
import linkedinimg from "../../assets/linkedin.png"
import instagramimg from "../../assets/insta.png"

import "./Footer.css";
function Footer() {
  return (
    <div className="footer_container">
      <a href="/">
      <img src={discordimg} alt="" />
      </a>
      <a href="/">
      <img src={linkedinimg} alt="" />
      </a>
     <a href="/">
      <i className="fa fa-instagram"></i>
     </a>
    </div>
  );
}

export default Footer;
