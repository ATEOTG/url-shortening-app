import React from "react";
import classes from "./Footer.module.css";
import { ReactComponent as ReactLogo } from "../assets/images/logo.svg";

import FacebookLogo from "./SVG/facebookLogo";
import InstagramLogo from "./SVG/instagramLogo";
import PinterestLogo from "./SVG/pinterestLogo";
import TwitterLogo from "./SVG/twitterLogo";

function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <ReactLogo className={classes.logo} alt="shortly-logo" />
        <div className={classes["footer-navs"]}>
          <nav className={classes.navigation}>
            <h4>Features</h4>
            <ul className={classes["footer-nav"]}>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Link Shortening
                </a>
              </li>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Branded Links
                </a>
              </li>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Analytics
                </a>
              </li>
            </ul>
          </nav>
          <nav className={classes.navigation}>
            <h4>Resources</h4>
            <ul className={classes["footer-nav"]}>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <nav className={classes.navigation}>
            <h4>Company</h4>
            <ul className={classes["footer-nav"]}>
              <li>
                <a href="#" className={classes["list-link"]}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className={classes["list-link"]}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={classes["social-media-logos"]}>
            <a className={classes["social-media-logo"]} href="#">
       
              <FacebookLogo />
            </a>
            <a className={classes["social-media-logo"]} href="$">
             
              <TwitterLogo />
            </a>

            <a className={classes["social-media-logo"]} href="#">
              <PinterestLogo />
            </a>
            <a className={classes["social-media-logo"]} href="#">
              <InstagramLogo />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
