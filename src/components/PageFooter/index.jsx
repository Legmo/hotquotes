import React from 'react';
import style from './style.module.css';
import Navigation from '../Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const iconMail = <FontAwesomeIcon icon={faEnvelope} size="1x" />;

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Navigation />
      <nav className="font-weight-light small text-right mx-auto pt-1">
        <a
          href="&#109;&#97;i&#108;&#116;o&#58;mail&#64;&#108;%&#54;5%67&#37;6Do&#46;%&#55;2&#117;"
          title={'Написать разработчику'}
        >
          {iconMail}
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
