import React, { useState } from "react";
import classes from "./Navigation.module.css";
import logo from "../assets/images/logo.svg";
import { RiMenuFill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import CTAButton from "./UI/CTAButton";
import DropdownMenu from "./DropdownMenu";

function Navigation() {
  const [menuToggle, setMenuToggle] = useState(false);

  function menuToggleHandler() {
    setMenuToggle((prevState) => !prevState);
  }

  let menu = (
    <RiMenuFill
      onClick={menuToggleHandler}
      className={classes["menu-icon"]}
      alt="mobile-menu-icon"
    />
  );

  if (menuToggle === true) {
    menu = (
      <RiCloseLine
        onClick={menuToggleHandler}
        className={classes["close-icon"]}
        alt="mobile-close-icon"
      />
    );
  }

  return (
    <div className={classes.navigation}>
      <div className={classes["logo-cont"]}>
        <img src={logo} alt="shortly-logo" />
        <div className={classes["desktop-nav"]}>
          <div className={classes["desktop-left"]}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </div>
          <div id={classes.dr} className={classes["desktop-right"]}>
            <a href="#">Login</a>
            <CTAButton>Sign up</CTAButton>
          </div>
        </div>
      </div>
      <div className={classes["nav-menu"]}>{menu}</div>
      {menuToggle && <DropdownMenu />}
    </div>
  );
}

export default Navigation;
