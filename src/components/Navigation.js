import classes from "./Navigation.module.css";
import logo from "../assets/images/logo.svg";
import { RiMenuFill } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

function Navigation() {
  return (
    <div className={classes.navigation}>
      <div>
        <img src={logo} alt="shortly-logo" />
      </div>
      <div>
        <RiMenuFill className={classes["mobile-icon"]} alt="mobile-menu" />
      </div>
    </div>
  );
}

export default Navigation;
