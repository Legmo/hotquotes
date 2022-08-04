import React, { FC } from 'react';
import style from './style.module.scss';
import PreloaderImg from '../../../assets/svgJsx/preloader';

type PropsType = {
  height?: number | null
  width?: number | null
  color?: string | null
}

const Preloader:FC<PropsType>  = (props) => {
  return (
    <div className = {style.preloaderWrapper}>
       <PreloaderImg {...props}/>
    </div>
  );
};


export default Preloader;
