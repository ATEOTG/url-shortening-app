import React, { useState } from "react";
import classes from "./Navigation.module.css";
import logo from "../assets/images/logo.svg";
import { RiMenuFill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
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
      <div>
        <img src={logo} alt="shortly-logo" />
      </div>
      <div className={classes["nav-menu"]}>{menu}</div>
      {menuToggle && <DropdownMenu />}
    </div>
  );
}

export default Navigation;
