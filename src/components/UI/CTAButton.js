import classes from "./CTAButton.module.css";

function CTAButton(props) {
  return <button className={classes.button}>{props.children}</button>;
}

export default CTAButton;
