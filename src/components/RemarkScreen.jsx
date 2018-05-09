import React from 'react';
import Link from 'gatsby-link';
import Obfuscate from 'react-obfuscate';
import { FaAngellist, FaWrench } from 'react-icons/lib/fa';

const ForHomePageContent = (
  <div className="c-remark-screen__message">
    <p>
      Drop me 
      a message at <b><Obfuscate email='sunday5k@gmail.com' /></b>.
    </p>
    <p>
      Thank you. Now, you're free to go further.
    </p>
  </div>
);

const ForContactPageContent = (
  <div className="c-remark-screen__message">
    <p>
      <b>Hi there</b><br /> Before you leave
    </p>
    <p>
      I want you to remember that at present, I am open to <b>full time on-site job</b> offers.
    </p>
    <p>
      If you feel that you want me on your team, drop me 
      a message at <b><Obfuscate email='sunday5k@gmail.com' /></b>.
    </p>
    <p>
      
    </p>
    <p>
      Thank you<br />
      <b>Sergey</b>
    </p>
  </div>
);

const RemarkScreen = (props) => { 
  const links = [ 
    { path: 'scoreboard', icon: FaAngellist }, 
    //{ path: 'scoreboard', icon: FaPaperPlaneO }
  ];

  return (
    <div className={`c-remark-screen ${props.isActive && 'c-remark-screen--is-active'}`}>
      {props.locationPathName === '/' ? ForHomePageContent : ForContactPageContent}
      {props.locationPathName === '/' &&
        <div className="c-remark-screen__links">
          {
            links.map((link) => (        
              <Link 
                key={link.path}
                className="c-remark-screen__link" 
                to={`/${link.path}/`}
                onClick={props.onClick}
                tabIndex={props.isActive ? '1' : '-1'}
              >
                <link.icon /> {link.path}
              </Link>)
            ) 
          }
        </div>
      }

      <div className="c-remark-screen__bg"></div>
    </div>
  )
};

export default RemarkScreen;
