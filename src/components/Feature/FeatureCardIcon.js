import classes from "./FeatureCardIcon.module.css";

function FeatureCardIcon(props) {
  return (
    <div className={classes["icon-cont"]}>
      <div className={classes.circle}>
        <img className={classes.icon} src={props.iconSrc} alt={props.iconAlt} />
      </div>
    </div>
  );
}

export default FeatureCardIcon;
