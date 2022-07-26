import React from 'react';
import style from './style.module.scss';
import ButtonCopyToClipboard from '../Element_ButtonCopyToClipboard';
import PropTypes from 'prop-types';
import RefreshBlock from '../Element_RefreshBlock';

const QuoteToolbar = (props) => {
  return (
    <div className = {style.toolbarWrapper}>
      <ButtonCopyToClipboard quoteId = {props.quoteId}/>
      <RefreshBlock callback = {props.refreshCallback} />
    </div>
  );
};

QuoteToolbar.propTypes = {
  quoteId:         PropTypes.string,
  refreshCallback: PropTypes.func,
};

export default QuoteToolbar;
