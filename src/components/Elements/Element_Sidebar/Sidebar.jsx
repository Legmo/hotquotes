import React from 'react';
import style from './style.module.scss';
import ListSidebar from '../Element_ListSidebar';
import FiltersActive from '../Element_FiltersActive';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  const listAuthorsFull = props.authors.authors.map((authorObject) => authorObject.name + ' ' + authorObject.surname);
  const listTagsFull = props.tags.tags.map((tagObject) => tagObject.title);

  const listTagsReduce = listTagsFull.reduce(
    (flat, current) => flat.concat(current),
    []
  );
  const listAuthorsReduce = listAuthorsFull.reduce(
    (flat, current) => flat.concat(current),
    []
  );

  // todo: возможно стоит сделать функцию/компонент для генерации sections. Наследование? Подумать.
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
  authors:      PropTypes.object,
  tags:         PropTypes.object,
};

export default Sidebar;
