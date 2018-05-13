import React from "react";
import HeadlineWithFocus from '../components/HeadlineWithFocus';
import Fetchdata from "../components/Fetchdata";
import Helmet from 'react-helmet';

export default () => (
  <div className="c-content-box">
    <Helmet title="That's my running toolbox" />  

    <HeadlineWithFocus><span>These are pieces of </span>my RunBox</HeadlineWithFocus>
    <Fetchdata />
   
  </div>
);