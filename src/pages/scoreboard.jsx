import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Linear from "../components/Linear";
import Helmet from "react-helmet";

export default () => (
  <div className="c-content-box">
    <Helmet title="Sunday5K ScoreBoard" />
    <HeadlineWithFocus>
     
    <Linear />
    </HeadlineWithFocus>
    <p>Coming soon...</p>
  </div>
);
