import React from 'react';
import logo40 from './../images/logo40.jpg';
import logo24 from './../images/logo24.jpg';
import logo140 from './../images/logo140.png';

const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img 
      src={(props.modifierClasses === 'c-avatar--as-author') ? logo40 : logo140} 
      alt="sunday5k.club"
    />
  </div>
)

export default Avatar;