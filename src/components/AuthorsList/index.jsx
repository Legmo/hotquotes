import React from 'react';
import style from './style.module.css';

const AuthorsList = (props) => {
  const Authors = props.authors.map((props) => (
    <li
      key={props.id}
      className={style.list_item + ' ml-3'}
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
      {Authors}
    </ul>
  );
};

export default AuthorsList;
