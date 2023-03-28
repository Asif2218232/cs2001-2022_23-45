import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./SocialLinks.css";
import "@fortawesome/fontawesome-svg-core/styles.css";


function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/profile.php?id=100090519167634/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
      <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitterSquare} /></a>
      <a href="https://www.instagram.com/brunelclimateaction/"><FontAwesomeIcon icon={faInstagramSquare} /></a>
      <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  );
}

export default SocialLinks;
