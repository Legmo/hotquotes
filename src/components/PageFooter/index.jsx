import React from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
// import Navigation from '../Navigation';

const iconMail = <FontAwesomeIcon icon = {faEnvelope} size = '1x' />;

const Footer = () => {
  return (
    <footer className = {style.footer}>
      {/*<Navigation />*/}
      <div></div>
      {/* todo: <div></div> = заглушка вместо <Navigation /> */}
      <address>
        <a
          href = '&#109;&#97;i&#108;&#116;o&#58;mail&#64;&#108;%&#54;5%67&#37;6Do&#46;%&#55;2&#117;'
          title = {'Написать разработчику'}
          className = {style.linkIcon}
        >
          {iconMail}
        </a>
      </address>
    </footer>
  );
};

export default Footer;
