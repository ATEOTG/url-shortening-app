import Form from "../Form/Form";
import classes from "./Feature.module.css";
import FeatureCards from "./FeatureCards";

function Feature() {
  return (
    <div className={classes.features}>
      <Form />
      <div className={"container"}>
        <div className={classes["feature-intro"]}>
          <h2>Advanced Statistics</h2>
          <p>
            {" "}
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={classes["feature-container"]}>
          <FeatureCards />
        </div>
      </div>
    </div>
  );
}

export default Feature;
