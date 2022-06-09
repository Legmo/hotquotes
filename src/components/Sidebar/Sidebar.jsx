import React from 'react';
import CategoriesList from '../CategoriesList';
import AuthorsList from '../AuthorsList';
import style from './style.module.css';
import { reduceToUniq } from '../../helpers';

const Sidebar = (props) => {
  let state = props.quotes;

  //Вынести эту логику в компонент. Какой? СategoryList ?
  const categoryListFull = state.quotes_base.map(function (quote) {
    return quote.category;
  });
  const categoryListReduce = categoryListFull.reduce(function (flat, current) {
    return flat.concat(current);
  }, []);
  const categoryListUniq = reduceToUniq(categoryListReduce);

  //todo: Вынести эту логику в компонент. Какой? AuthorsList ?
  const authorsListFull = state.quotes_base.map(function (quote) {
    return quote.author;
  });
  const authorsListReduce = authorsListFull.reduce(function (flat, current) {
    return flat.concat(current);
  }, []);
  const authorsListUniq = reduceToUniq(authorsListReduce);

  return (
    <aside className={style.sidebarContent + ' sidebar col-md-2 text-right'}>
      <div>
        <h5>Категории</h5>
        <CategoriesList categories={categoryListUniq} />
      </div>
      <div>
        <h5>Авторы</h5>
        <AuthorsList filter="none" authors={authorsListUniq} />
      </div>
      <div>
        <p className={style.info}>
          Здесь будут отображаться выбранные категории и авторы с возможностью
          удаления + счётчик подходящих цитат
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
