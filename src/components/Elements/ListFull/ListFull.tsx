import React, { FC } from 'react';
import style from './style.module.scss';

type PropsType = {
  filter?: string | null,
  title: string,
  listItems: Array<string>,
  listName: string,
};

const ListFull:FC<PropsType> = (props) => {
  const Items = props.listItems.map((props) => {
    // todo: set keys!
    /*    <li key = {props.id} className = {style.listItem} title = {props.title}>
     {props.name}
     </li>*/
    return (
      <li key = {props} className = {style.listItem}>
        {props}
      </li>
    );
  }
);
  const listClassName = 'list' + props.listName;

  return (
    <ul className = {style.listFull + ' ' + style[listClassName]}>{Items}</ul>
  );
};

export default ListFull;
