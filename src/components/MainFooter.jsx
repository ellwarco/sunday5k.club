import React from "react";
import Link from "gatsby-link";
import FaHeart from 'react-icons/lib/fa/heart';

const MainFooter = () => (
  <div className="c-main-footer">
    <p className="c-main-footer__note">
    Made with {' '}<FaHeart />{' '} {' '} © {2018} 
    </p>
  </div>
);

export default MainFooter;
