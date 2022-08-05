import React, { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./FeatureCards.module.css";
import FeatureCardIcon from "./FeatureCardIcon";
import brandRecognition from "../../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../../assets/images/icon-fully-customizable.svg";

function FeatureCards() {
  return (
    <Fragment>
      <Card childrenClass={classes["feature-card"]}>
        <FeatureCardIcon
          iconSrc={brandRecognition}
          iconAlt={"data chart icon"}
        />
        <h3>Brand Recognition</h3>
        <p>
          Boost your brand recognition with each click. Generic links don't mean
          a thing. Branded links help instill confidence in your content.
        </p>
      </Card>
      <div className={classes["vertical-cont"]}>
        <div className={classes["vertical-line"]}></div>
      </div>
      <Card childrenClass={classes["feature-card"]}>
        <FeatureCardIcon iconSrc={detailedRecords} iconAlt={"clock icon"} />
        <h3>Detailed Records</h3>
        <p>
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </Card>
      <Card childrenClass={classes["feature-card"]}>
        <FeatureCardIcon
          iconSrc={fullyCustomizable}
          iconAlt={"different writing tools"}
        />

        <h3>Fully Customizable</h3>
        <p>
          Improve brand awareness and content discoverability throuhg
          customizable links, supercharging audience engagement.
        </p>
      </Card>
    </Fragment>
  );
}

export default FeatureCards;
