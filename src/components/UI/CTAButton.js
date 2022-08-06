import classes from "./CTAButton.module.css";

function CTAButton(props) {
  return (
    <button className={classes.button} type={props.type}>
      {props.children}
    </button>
  );
}

export default CTAButton;
