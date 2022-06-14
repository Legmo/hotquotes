import React from 'react';
import style from './style.module.scss';

const ListSidebar = (props) => {
  const Items = props.listItems.map((props) => (
    <li key={props.id} className={style.listItem} title={props.title}>
      {props.name}
    </li>
  ));
  const listClassName = 'list' + props.listName;

  return (
    //todo: добавить внизу ссылку "Показать все". При клике открывается блок-аккордеон, с вертикальной прокруткой и буквами-заголовками, как в адресной книге
    <ul className={style.listSidebar + ' ' + style[listClassName]}>{Items}</ul>
  );
};

export default ListSidebar;
