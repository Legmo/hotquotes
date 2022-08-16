import React, { FC } from 'react';
import style from './style.module.scss';
import {NavLink} from 'react-router-dom';

type PropsType = {
  isActive?: boolean
};

const Navigation:FC<PropsType> = () => {
  return (
    <ul className = {style.navList}>
      <NavLink
        to = '/'
        // className = {props => props.isActive ? style.active : style.navItem}
        className = {({ isActive }) => isActive ? style.active : style.navItem}
      >
        Главная
      </NavLink>
      <NavLink
        to = '/add_quote'
        className = {({ isActive }) => isActive ? style.active : style.navItem}
      >
        Добавить цитату
      </NavLink>

    </ul>
  );
};

export default Navigation;
