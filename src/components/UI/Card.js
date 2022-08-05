import classes from "./Card.module.css";

function Card(props) {
  const cardClass = `${classes.card} ${props.childrenClass}`;
  return <div className={cardClass}>{props.children}</div>;
}

export default Card;
