import React, { FC } from 'react';
import style from './style.module.scss';

type PropsType = {
  listItems: Array<string>,
};

const TagsListInline:FC<PropsType> = ({listItems}:PropsType) => {
  const listTagsInline = listItems.map(item => (
/*    <li key = {item.id} className = {style.listItem} title = 'Добавить в фильтры'>
      {item.name}
    </li>*/
    // todo: can we get item.id here?
    <li key = {item} className = {style.listItem} title = 'Добавить в фильтры'>
      {item}
    </li>
  ));

  return <ul className = {style.list}>{listTagsInline}</ul>;
};

export default TagsListInline;
