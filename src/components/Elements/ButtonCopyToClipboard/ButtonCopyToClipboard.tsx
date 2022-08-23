import React, { FC } from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const iconCopy = <FontAwesomeIcon icon = {faCopy} size = '1x' />;

type PropsType = {
  quoteId: string
};

const ButtonCopyToClipboard:FC<PropsType> = ({quoteId}:PropsType) => {
  // todo: Подумать как получать актуальный вариант для localhost. Из адресной строки? Из переменных окружения?
  // const basicUrl = 'http://localhost:3000';
  const basicUrl = 'https://legmo.github.io/hotquotes/#';

  return (
    <div className = {style.refreshBlock}>
      <button
        className = {style.buttonIcon}
        title = 'Скопировать ссылку на эту цитату'
        onClick = {() => navigator.clipboard.writeText(`${basicUrl}/quote/${quoteId}`)}
      >
        {iconCopy}
      </button>
    </div>
  );
};

export default ButtonCopyToClipboard;
