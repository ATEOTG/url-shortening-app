import classes from "./Header.module.css";
import CTAButton from "./UI/CTAButton";
import image from "../assets/images/illustration-working.svg";

function Header() {
  return (
    <header>
      <img
        className={classes.illustration}
        src={image}
        alt="drawing of person using computer"
      />
      <div className={classes["header-text"]}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <CTAButton>Get Started</CTAButton>
      </div>
    </header>
  );
}

export default Header;
