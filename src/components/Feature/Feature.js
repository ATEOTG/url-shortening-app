import React, { useState } from "react";
import Form from "../Form/Form";
import FormList from "../Form/FormList";
import classes from "./Feature.module.css";
import FeatureCards from "./FeatureCards";

function Feature() {
  const [linkList, setlinkList] = useState([]);

  function userLinkHandler(link) {
    if (linkList.length === 3) {
      setlinkList((prevState) => [link, ...prevState.slice(0, 2)]);
    } else {
      setlinkList((prevState) => [link, ...prevState]);
    }
  }

  return (
    <div className={classes.features}>
      <Form onUserSubmission={userLinkHandler} />
      <FormList userLinks={linkList} />
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
