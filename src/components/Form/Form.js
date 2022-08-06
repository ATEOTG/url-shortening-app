import React, { useRef, useState } from "react";
import CTAButton from "../UI/CTAButton";
import classes from "./Form.module.css";

function Form() {
  const [isValid, setIsValid] = useState(true);
  const inputValue = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const userLink = inputValue.current.value;

    if (userLink.trim() == "") {
      setIsValid(false);
      inputValue.current.value = "";
      return;
    }

    setIsValid(true);
    inputValue.current.value = "";
  }

  const errorClass = !isValid ? "error" : "";

  return (
    <form id={classes.form} onSubmit={submitHandler}>
      <div className={classes["input-cont"]}>
        <input
          ref={inputValue}
          type="text"
          className={`${classes["input-field"]} ${classes[errorClass]}`}
          placeholder="Shorten a link here..."
        />
        {!isValid && <p>Please add a link</p>}
      </div>
      <CTAButton type={"submit"}>Shorten it!</CTAButton>
    </form>
  );
}

export default Form;
