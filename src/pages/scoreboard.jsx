import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Fetchdata from "../components/Fetchdata";
import Linear from "../components/Linear";
import Helmet from "react-helmet";

export default () => (
  <div className="c-content-box">
    <Helmet title="Sunday5K ScoreBoard" />
    <HeadlineWithFocus>
      <Fetchdata />
    <Linear />
    </HeadlineWithFocus>
    <p>Coming soon...</p>
  </div>
);
