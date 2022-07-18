import React from 'react';
import style from './style.module.scss';
import ListSidebar from '../Element_ListSidebar';
import FiltersActive from '../Element_FiltersActive';
import PropTypes from 'prop-types';
import { getTable } from '../../../DataAccessLayer/axiosRequests';

const Sidebar = (props) => {

  //todo: for testing
  if(props.authors.authors.length === 0) {
    getTable('authors').then (
      response => {
        props.setAuthors(response);
      }
    );
  }
  if(props.tags.tags.length === 0) {
    getTable('tags').then (
      response => {
        props.setTags(response);
      }
    );
  }

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
  authors:      PropTypes.object,
  authorsArray: PropTypes.array,
  tags:         PropTypes.object,
  tagsBase:     PropTypes.array,
  setAuthors:   PropTypes.func,
};

export default Sidebar;
