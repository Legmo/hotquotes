import React, { FC } from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const iconCopy = <FontAwesomeIcon icon = {faCopy} size = '1x' />;

type PropsType = {
  quoteId: string
};

const ButtonCopyToClipboard:FC<PropsType> = (props) => {
  const basicUrl = 'http://localhost:3000'; //todo: получать из браузера! Возможно - прокидывать из Quote

  return (
    <div className = {style.refreshBlock}>
      <button
        className = {style.buttonIcon}
        title = 'Скопировать ссылку на эту цитату'
        onClick = {() => navigator.clipboard.writeText(`${basicUrl}/quote/${props.quoteId}`)}
      >
        {iconCopy}
      </button>
    </div>
  );
};

export default ButtonCopyToClipboard;
