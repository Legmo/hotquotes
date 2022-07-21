import React from 'react';
import style from './style.module.scss';
import PreloaderImg from '../../../assets/svgJsx/preloader';
import PropTypes from 'prop-types';

const Preloader = (props) => {
  return (
    <div className = {style.preloaderWrapper}>
       <PreloaderImg {...props}/>
    </div>
  );
};

Preloader.propTypes = {
  height: PropTypes.number,
  width:  PropTypes.number,
  color:  PropTypes.string,
};

export default Preloader;
