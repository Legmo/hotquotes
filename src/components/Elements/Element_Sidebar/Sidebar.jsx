import React from 'react';
import style from './style.module.scss';
import ListSidebar from '../Element_ListSidebar';
import FiltersActive from '../Element_FiltersActive';
import PropTypes from 'prop-types';
import axios from 'axios';

const Sidebar = (props) => {
  let basicUrl = "https://api.airtable.com/v0/appf6c9WBCs4A4Uq6/";
  let apiKey = ''; // Insert your API key here, for example 'keyABCDEFGHIJKLMN'
  axios.get(`${basicUrl}quotesBase?api_key=${apiKey}`).then(
    response => {
      response.data.records.map(quoteObject => {
        console.log('Quote ', quoteObject.fields);
      });
    }
  );

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
  authors:     PropTypes.object,
  authorsBase: PropTypes.array,
  tags:        PropTypes.object,
  tagsBase:    PropTypes.array,
};

export default Sidebar;
