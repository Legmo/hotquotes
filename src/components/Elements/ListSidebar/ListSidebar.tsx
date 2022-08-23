import React, { FC } from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';
import { SidebarListObjectType } from '../../../types/types';

type PropTypes = {
  listItems: Array<SidebarListObjectType>
  listName: string
}

const ListSidebar:FC<PropTypes> = ({listItems, listName}:PropTypes) => {
  const Items = listItems.map((listItem) => {

    return (
      <li key = {listItem.id} className = {style.listItem} title = {listItem.linkTitle}>
       {listItem.title}
      </li>
    );
  }
);
  const listClassName = 'list' + listName;

  return (
    //todo: добавить внизу ссылку "Показать все". При клике открывается блок-аккордеон, с вертикальной прокруткой и буквами-заголовками, как в адресной книге
    <ul className = {style.listSidebar + ' ' + style[listClassName]}>{Items}</ul>
  );
};

export default ListSidebar;
