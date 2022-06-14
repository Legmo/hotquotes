import React from 'react';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.navList}>
      <NavLink
        to="/index"
        className={style.navItem}
        activeclassname={style.active}
      >
        Главная
      </NavLink>
      <NavLink
        to="/add_quote"
        className={style.navItem}
        activeclassname={style.active}
      >
        Добавить цитату
      </NavLink>
    </div>
  );
};

export default Navigation;
