import React from 'react';
import style from './style.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const iconCopy = <FontAwesomeIcon icon = {faCopy} size = '1x' />;

const ButtonCopyToClipboard = (props) => {
  let basicUrl = 'http://localhost:3000'; //todo: получать из браузера! Возможно - прокидывать из Page_Index

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

ButtonCopyToClipboard.propTypes = {
  quoteId: PropTypes.string,
};

export default ButtonCopyToClipboard;
