import React from 'react';
import style from './style.module.scss';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const iconSync = <FontAwesomeIcon icon = {faSync} size = '1x' />;
// todo: перенести в нижнюю четверть экрана по центру страницы. Чтоб при изменении цитаты кнопка почти всегда оставалась на месте (удобнее кликать)
// todo: кроме иконки написать текст
// todo: навесить горячую клавишу + написать подсказку о клавише возле кнопки

const RefreshBlock = (props) => {
  let callback = props.callback ? props.callback : console.log('We need to send callback function via props into RefreshBlock component.');

  return (
    <div className = {style.refreshBlock}>
      <button
        className = {style.buttonIcon}
        title = 'Хочу ещё!'
        onClick = {callback}
      >
        {iconSync}
      </button>
    </div>
  );
};

RefreshBlock.propTypes = {
  callback: PropTypes.func,
};

export default RefreshBlock;
