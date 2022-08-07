import classes from "./FormList.module.css";
import LinkItem from "../UI/LinkItem";

function FormList(props) {
  const renderList = props.userLinks.map((link) => {
    return (
      <li key={link.id}>
        <LinkItem item={link} />
      </li>
    );
  });

  return <ul className={classes["list-cont"]}>{renderList}</ul>;
}

export default FormList;
