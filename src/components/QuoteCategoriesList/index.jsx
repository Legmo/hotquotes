import React from 'react';
import style from './style.module.css';

const QuoteCategoriesList = (props) => {
  var inlineStyle = '';
  if (props.inline == 'yes') {
    inlineStyle = 'd-inline-block';
  }

  const categoryElements = props.categories.map((props) => (
    <li
      key={props.id}
      className={style.list_item + ' ' + inlineStyle + '  ml-3'}
      title="Добавить в фильтры"
    >
      {props.name}
    </li>
  ));

  return (
    <ul
      className={
        style.list + ' d-block font-weight-light text-muted mt-2 small'
      }
    >
      {categoryElements}
    </ul>
  );
};

export default QuoteCategoriesList;
