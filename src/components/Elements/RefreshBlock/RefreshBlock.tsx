import React, { FC, MouseEventHandler } from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync} from '@fortawesome/free-solid-svg-icons';

type PropsType = {
    callback: MouseEventHandler<HTMLButtonElement>
};

const iconSync = <FontAwesomeIcon icon = {faSync} size = '1x' />;
// todo: перенести в нижнюю четверть экрана по центру страницы. Чтоб при изменении цитаты кнопка почти всегда оставалась на месте (удобнее кликать)
// todo: кроме иконки написать текст
// todo: навесить горячую клавишу + написать подсказку о клавише возле кнопки

const RefreshBlock:FC<PropsType>  = (props) => {

  return (
    <div className = {style.refreshBlock}>
      <button
        className = {style.buttonIcon}
        title = 'Хочу ещё!'
        onClick = {(e) => props.callback(e)}
      >
        {iconSync}
      </button>
    </div>
  );
};

export default RefreshBlock;
