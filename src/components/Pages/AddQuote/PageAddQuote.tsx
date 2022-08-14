import React, { FC } from 'react';
import FormAddQuoteContainer from '../../Elements/FormAddQuote/Container';
import style from '../TagsList/style.module.scss';
import Preloader from '../../Elements/Preloader/Preloader';
import { InitialQuoteStateType } from '../../../redux/reducer-quotes';
// import style from './style.module.scss';

type PropsType = {
  quotes: InitialQuoteStateType;
}

const PageAddQuote:FC<PropsType> = (props) => {
  return (
    <>
      <h2 className = {style.title}>Добавить цитату</h2>
      {props.quotes.isUpdating && <div className = {style.preloaderWrapper}><Preloader /></div>}
      <FormAddQuoteContainer />
    </>
  );
};

export default PageAddQuote;
