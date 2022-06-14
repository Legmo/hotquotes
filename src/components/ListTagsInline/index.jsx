import React from 'react';
import style from './style.module.scss';

const ListTagsInline = (props) => {
  const listTagsInline = props.listItems.map((props) => (
    <li key={props.id} className={style.listItem} title="Добавить в фильтры">
      {props.name}
    </li>
  ));

  return <ul className={style.list}>{listTagsInline}</ul>;
};

export default ListTagsInline;
