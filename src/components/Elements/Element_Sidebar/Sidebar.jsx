import React from 'react';
import style from './style.module.scss';
import ListSidebar from '../Element_ListSidebar';
import FiltersActive from '../Element_FiltersActive';
import PropTypes from 'prop-types';
// import { reduceToUniq } from '../../../utils/helpers';

const Sidebar = (props) => {

  //todo: Вынести эту логику в компонент, который будет готовить информацию из базы данных
  /*
  const dataReducerByKey = (key) => {
    return quotesBase.map((quote) => quote[key]);
  };
  const dataReducer = (array) => {
    return quotesBase.map((quote) => quote[key]);
  };
  const listAuthorsFull = dataReducer('author');
  */
  
  const listTagsFull = props.authors.authorsBase.map((authorObject) => authorObject.name + ' ' + authorObject.surname);
  const listAuthorsFull = props.tags.tagsBase.map((tagObject) => tagObject.name);

  const listTagsReduce = listTagsFull.reduce(
    (flat, current) => flat.concat(current),
    []
  );
  const listAuthorsReduce = listAuthorsFull.reduce(
    (flat, current) => flat.concat(current),
    []
  );

  // todo: возможно стоит сделать функцию/компонент для генерация sidebar. Подумать
  return (
    <aside className = {style.sidebar}>
      <section className = {style.sectionSidebar + ' ' + style.sectionTags}>
        <h2 className = {style.titleSidebar}>Категории</h2>
        <ListSidebar
          filter = 'none'
          listItems = {listTagsReduce}
          listName = 'Tags'
          title = 'Добавить в фильтры'
        />
      </section>
      <section className = {style.sectionSidebar + ' ' + style.sectionAuthors}>
        <h2 className = {style.titleSidebar}>Авторы</h2>
        <ListSidebar
          filter = 'none'
          listItems = {listAuthorsReduce}
          listName = 'Authors'
          title = 'Добавить в фильтры'
        />
      </section>
      <div>
        <section className = {style.sectionSidebar + ' ' + style.sectionTags}>
          <h2 className = {style.titleSidebar}>Активные фильтры</h2>
          <FiltersActive filtersList = {''} />
        </section>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  authors:     PropTypes.array,
  authorsBase: PropTypes.array,
  tags:        PropTypes.array,
  tagsBase:    PropTypes.array,
};

export default Sidebar;
