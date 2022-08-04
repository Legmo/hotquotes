import React from 'react';
import FormAddQuoteContainer from '../../Elements/FormAddQuote/Container';
import style from '../TagsList/style.module.scss';
// import style from './style.module.scss';

const PageAddQuote = () => {
  return (
    <>
      <h2 className = {style.title}>Добавить цитату</h2>
      <FormAddQuoteContainer />
    </>
  );
};

export default PageAddQuote;
