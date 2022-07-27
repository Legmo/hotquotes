import React, { Component } from 'react';
import style from './style.module.scss';
import ListSidebar from '../Element_ListSidebar/ListSidebar';
import FiltersActive from '../Element_FiltersActive';
import PropTypes from 'prop-types';
import { getTable } from '../../../DataAccessLayer/api';
import Preloader from '../Element_Preloader';

class Sidebar extends Component {
  componentDidMount() {
    this.props.setAuthorsIsFetching(true);
    getTable('authors').then((response) => {
      this.props.setAuthors(response);
      this.props.setAuthorsIsFetching(false);
    });
    this.props.setTagsIsFetching(true);
    getTable('tags').then((response) => {
      this.props.setTags(response);
      this.props.setTagsIsFetching(false);
    });
  }

  render() {
    const listAuthorsFull = this.props.authors.authors.map((authorObject) => authorObject.name + ' ' + authorObject.surname);
    const listTagsFull = this.props.tags.tags.map((tagObject) => tagObject.title);

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
          {
            this.props.tags.isFetching
              ? <Preloader width = {24} height = {24}/>
              : < ListSidebar
                  filter = 'none'
                  listItems = {listTagsReduce}
                  listName = 'Tags'
                  title = 'Добавить в фильтры'
                />
          }
        </section>
        <section className = {style.sectionSidebar + ' ' + style.sectionAuthors}>
          <h2 className = {style.titleSidebar}>Авторы</h2>
          {
            this.props.authors.isFetching
              ? <Preloader width = {24} height = {24}/>
              : < ListSidebar
                filter = 'none'
                listItems = {listAuthorsReduce}
                listName = 'Authors'
                title = 'Добавить в фильтры'
              />
          }
        </section>
        <div>
          <section className = {style.sectionSidebar + ' ' + style.sectionTags}>
            <h2 className = {style.titleSidebar}>Активные фильтры</h2>
            <FiltersActive filtersList = {''} />
          </section>
        </div>
      </aside>
    );
  }
}


Sidebar.propTypes = {
  authors:              PropTypes.object,
  tags:                 PropTypes.object,
  setAuthors:           PropTypes.func,
  setTags:              PropTypes.func,
  setSources:           PropTypes.func,
  setAuthorsIsFetching: PropTypes.func,
  setTagsIsFetching:    PropTypes.func,
  isFetching:           PropTypes.bool,
};

export default Sidebar;
