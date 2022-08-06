import React, { useRef } from "react";
import CTAButton from "../UI/CTAButton";
import classes from "./Form.module.css";

function Form() {
  return (
    <form id={classes.form}>
      <div className={classes["input-cont"]}>
        <input type="text" placeholder="Shorten a link here..." />
        <p>Please add a link</p>
      </div>
      <CTAButton>Shorten it!</CTAButton>
    </form>
  );
}

export default Form;
