import React, { useRef, useState } from "react";
import CTAButton from "../UI/CTAButton";
import classes from "./Form.module.css";

function Form(props) {
  const [isValid, setIsValid] = useState(true);
  const inputValue = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const userLink = inputValue.current.value;

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${userLink}`
    );

    if (!response.ok) {
      setIsValid(false);
      inputValue.current.value = "";
      return;
    }
    const data = await response.json();
    const shortLink = data.result.short_link;

    props.onUserSubmission({
      id: data.result.code,
      initialLink: userLink,
      shortenedLink: shortLink,
    });
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
        {!isValid && <p>Please add a valid link</p>}
      </div>
      <CTAButton type={"submit"}>Shorten it!</CTAButton>
    </form>
  );
}

export default Form;
