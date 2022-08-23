import React from 'react';
import style from './style.module.scss';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
  return (
    <ul className = {style.navList}>
      <NavLink
        to = '/'
        title = 'На Главную'
        // className = {props => props.isActive ? style.active : style.navItem}
        className = {({ isActive }) => isActive ? style.active : style.navItem}
      >
        Главная
      </NavLink>
      <NavLink
        to = '/add_quote'
        title = 'Форма добавления цитаты'
        className = {({ isActive }) => isActive ? style.active : style.navItem}
      >
        Добавить цитату
      </NavLink>

    </ul>
  );
};

export default Navigation;
