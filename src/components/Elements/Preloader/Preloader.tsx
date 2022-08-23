import React, { FC } from 'react';
import style from './style.module.scss';
import PreloaderImg from '../../../assets/svgJsx/Preloader';

type PropsType = {
  height?: number,
  width?: number,
  color?: string,
}

const Preloader:FC<PropsType>  = ({height, width, color}:PropsType) => {
  return (
    <div className = {style.preloaderWrapper}>
       <PreloaderImg height = {height} width = {width} color = {color}/>
    </div>
  );
};


export default Preloader;
