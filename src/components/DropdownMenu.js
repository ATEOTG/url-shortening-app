import classes from "./DropdownMenu.module.css";
import CTAButton from "./UI/CTAButton";

function DropdownMenu() {
  return (
    <menu className={classes.dropdown}>
      <div className={classes["dropdown-top"]}>
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className={classes["dropdown-bottom"]}>
        <p>Login</p>
        <CTAButton>Sign up</CTAButton>
      </div>
    </menu>
  );
}

export default DropdownMenu;
