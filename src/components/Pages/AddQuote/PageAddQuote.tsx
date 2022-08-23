import React, { FC } from 'react';
import FormAddQuoteContainer from '../../Elements/FormAddQuote/Container';
import style from '../TagsList/style.module.scss';
import Preloader from '../../Elements/Preloader/Preloader';

type PropsType = {
  quotesIsUpdating: boolean;
}

const PageAddQuote:FC<PropsType> = ({quotesIsUpdating}) => {
  return (
    <>
      <h2 className = {style.title}>Добавить цитату</h2>
      {quotesIsUpdating && <div className = {style.preloaderWrapper}><Preloader /></div>}
      <FormAddQuoteContainer />
    </>
  );
};

export default PageAddQuote;
