import React, { FC } from 'react';
import style from './style.module.scss';

type PropsType = {
  listItems: Array<string>,
  listName: string,
};

const ListFull:FC<PropsType> = ({listItems, listName}:PropsType) => {
  const Items = listItems.map(item => {
    /*
    <li key = {item.id}  title = {item.title} className = {style.listItem}>
     {item.name}
     </li>*/
    // todo: can we get item.id here?
    return (
      <li key = {item} className = {style.listItem}>
        {item}
      </li>
    );
  }
);
  const listClassName = 'list' + listName;

  return (
    <ul className = {style.listFull + ' ' + style[listClassName]}>{Items}</ul>
  );
};

export default ListFull;
