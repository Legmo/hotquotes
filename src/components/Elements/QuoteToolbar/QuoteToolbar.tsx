import React, { FC } from 'react';
import style from './style.module.scss';
import ButtonCopyToClipboard from '../ButtonCopyToClipboard/ButtonCopyToClipboard';
import RefreshBlock from '../RefreshBlock/RefreshBlock';

type PropsType = {
  quoteId: string,
  refreshCallback: () => void,
};

const QuoteToolbar:FC<PropsType> = (props) => {
  return (
    <div className = {style.toolbarWrapper}>
      <ButtonCopyToClipboard quoteId = {props.quoteId}/>
      <RefreshBlock callback = {props.refreshCallback} />
    </div>
  );
};

export default QuoteToolbar;
