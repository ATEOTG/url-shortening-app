import classes from "./SignUp.module.css";
import CTAButton from "./UI/CTAButton";

function SignUp() {
  return (
    <div className={classes["sign-up"]}>
      <h2>Boost your links today</h2>
      <CTAButton>Get Started</CTAButton>
    </div>
  );
}

export default SignUp;
