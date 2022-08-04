import React, { FC } from 'react';
import style from './style.module.scss';

type PropsType = {
  listItems: Array<string>,
};

const TagsListInline:FC<PropsType> = (props) => {
  const listTagsInline = props.listItems.map((props) => (
/*    <li key = {props.id} className = {style.listItem} title = 'Добавить в фильтры'>
      {props.name}
    </li>*/
    <li key = {props} className = {style.listItem} title = 'Добавить в фильтры'>
      {props}
    </li>
  ));

  return <ul className = {style.list}>{listTagsInline}</ul>;
};

export default TagsListInline;
