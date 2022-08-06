import React from "react";
import classes from "./Footer.module.css";
import { ReactComponent as ReactLogo } from "../assets/images/logo.svg";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import pinterestLogo from "../assets/images/icon-pinterest.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <ReactLogo className={classes.logo} />
      <div className={classes["footer-navs"]}>
        <nav className={classes.navigation}>
          <h4>Features</h4>
          <ul className={classes["footer-nav"]}>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </nav>
        <nav className={classes.navigation}>
          <h4>Resources</h4>
          <ul className={classes["footer-nav"]}>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </nav>
        <nav className={classes.navigation}>
          <h4>Company</h4>
          <ul className={classes["footer-nav"]}>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className={classes["social-media-logos"]}>
          <img src={facebookLogo} alt="facebook logo" />
          <img src={twitterLogo} alt="twitter logo" />
          <img src={pinterestLogo} alt="pinterest logo" />
          <img src={instagramLogo} alt="instagram logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
