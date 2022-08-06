import CTAButton from "../UI/CTAButton";
import classes from "./FormList.module.css";

function FormList(props) {
  const renderList = props.userLinks.map((link) => {
    return (
      <li key={link.id}>
        <div className={classes["form-item"]}>
          <p className={classes["user-link"]}>{link.initialLink}</p>
          <div className={classes["horizontal-line"]}></div>
          <div id={classes["shortened-link-section"]}>
            <p className={classes["shortened-link"]}>{link.shortenedLink}</p>
            <CTAButton>Copy</CTAButton>
          </div>
        </div>
      </li>
    );
  });

  return <ul className={classes["list-cont"]}>{renderList}</ul>;
}

export default FormList;
