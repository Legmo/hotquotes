import React, { FC, MouseEventHandler } from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync} from '@fortawesome/free-solid-svg-icons';

type PropsType = {
  callback: MouseEventHandler<HTMLButtonElement>
};

const iconSync = <FontAwesomeIcon icon = {faSync} size = '1x' />;

const RefreshBlock:FC<PropsType>  = ({callback}:PropsType) => {
  return (
    <div className = {style.refreshBlock}>
      <button
        className = {style.buttonIcon}
        title = 'Хочу ещё!'
        onClick = {(e) => callback(e)}
      >
        {iconSync}
      </button>
    </div>
  );
};

export default RefreshBlock;
