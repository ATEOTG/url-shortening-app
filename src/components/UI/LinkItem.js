import { useState } from "react";
import classes from "./LinkItem.module.css";

function LinkItem(props) {
  const [isCopied, setIsCopied] = useState(false);

  function clickHandler() {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    navigator.clipboard.writeText(props.item.shortenedLink);
  }

  return (
    <div className={classes["form-item"]}>
      <p className={classes["user-link"]}>{props.item.initialLink}</p>
      <div className={classes["horizontal-line"]}></div>
      <div id={classes["shortened-link-section"]}>
        <p className={classes["shortened-link"]}>{props.item.shortenedLink}</p>
        <button
          onClick={clickHandler}
          className={`${classes["copy-btn"]} ${
            !isCopied ? classes[""] : classes["copied"]
          }`}
        >
          {!isCopied ? "Copy" : "Copied!"}
        </button>
      </div>
    </div>
  );
}

export default LinkItem;
