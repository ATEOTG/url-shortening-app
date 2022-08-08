import classes from "./Card.module.css";

function Card(props) {
  const cardClass = `${classes.card} ${props.childrenClass}`;
  return (
    <div className={cardClass} id={props.id}>
      {props.children}
    </div>
  );
}

export default Card;
