// import CTAButton from "../UI/CTAButton";
import classes from "./FormList.module.css";

// const DUMMY_LIST = [
//   { link: "https://www.frontendmentor.io", shortened: "https://rel.ink/k4Kyk" },
// ];

function FormList() {
  return (
    <div className={classes["list-cont"]}>
      {/* <div className={classes["form-item"]}>
        <p className={classes["user-link"]}>{DUMMY_LIST[0].link}</p>
        <div className={classes["horizontal-line"]}></div>
        <div id={classes["shortened-link-section"]}>
          <p className={classes["shortened-link"]}>{DUMMY_LIST[0].shortened}</p>
          <CTAButton>Copy</CTAButton>
        </div>
      </div> */}
    </div>
  );
}

export default FormList;
