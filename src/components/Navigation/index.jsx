import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className={style.nav_parent + ' d-inline'}>
      <NavLink to="/index" className="mr-2" activeclassname={style.active}>
        Главная
      </NavLink>
      <NavLink to="/add_quote" className="mr-2" activeclassname={style.active}>
        Добавить цитату
      </NavLink>
    </div>
  );
};

export default Navigation;
