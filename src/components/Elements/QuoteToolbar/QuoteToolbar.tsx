import React, { FC } from 'react';
import style from './style.module.scss';
import ButtonCopyToClipboard from '../ButtonCopyToClipboard/ButtonCopyToClipboard';
import RefreshBlock from '../RefreshBlock/RefreshBlock';

type PropsType = {
  quoteId: string,
  refreshCallback: () => void,
};

const QuoteToolbar:FC<PropsType> = ({quoteId, refreshCallback}:PropsType) => {
// todo: перенести в нижнюю четверть экрана по центру страницы. Чтоб при изменении цитаты кнопка почти всегда оставалась на месте (удобнее кликать)
// todo: кроме иконок написать текст?
// todo: навесить горячие клавиши + написать подсказки о клавише возле кнопок?
  return (
    <div className = {style.toolbarWrapper}>
      <ButtonCopyToClipboard quoteId = {quoteId}/>
      <RefreshBlock callback = {refreshCallback} />
    </div>
  );
};

export default QuoteToolbar;
