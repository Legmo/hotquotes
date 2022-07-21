import React from 'react';
import FormAddQuoteContainer from '../../Elements/Element_FormAddQuote/Container';
import style from '../Page_Tags/style.module.scss';
// import PropTypes from 'prop-types';
// import style from './style.module.scss';

let PageAddQuote = () => {
  return (
    <>
      <h2 className = {style.title}>Добавить цитату</h2>
      <FormAddQuoteContainer />
    </>
  );
};

/*Page_AddQuote.propTypes = {
};*/

export default PageAddQuote;
