import React, { Component } from 'react';
import style from './style.module.scss';
import { isEmpty } from 'lodash';
import ListSidebar from '../ListSidebar/ListSidebar';
import FiltersActive from '../FiltersActive/FiltersActive';
import { getTable } from '../../../DataAccessLayer/api';
import Preloader from '../Preloader/Preloader';
import { AuthorObjectType, SidebarListObjectType, TagObjectType } from '../../../types/types';
import { InitialTagsStateType } from '../../../redux/reducer-tags';
import { InitialAuthorsStateType } from '../../../redux/reducer-authors';

type PropsType = {
  setAuthorsIsFetching: (isFetching:boolean) => void
  setAuthors: (authorsArray:Array<AuthorObjectType>) => void
  setTagsIsFetching: (isFetching:boolean) => void
  setTags: (tagsArray:Array<TagObjectType>) => void
  authors: InitialAuthorsStateType
  tags: InitialTagsStateType
};

class Sidebar extends Component<PropsType> {
  componentDidMount() {
    this.props.setAuthorsIsFetching(true);
    getTable('authors').then((response) => {
      this.props.setAuthors(response);
      this.props.setAuthorsIsFetching(false);
    });
    this.props.setTagsIsFetching(true);
    getTable('tags').then((response:Array<TagObjectType>) => {
      this.props.setTags(response);
      this.props.setTagsIsFetching(false);
    });
  }

  render() {
    let listAuthors = [] as Array<SidebarListObjectType>;
    let listTags = [] as Array<SidebarListObjectType>;
    if(!isEmpty(this.props.authors.authors)){
      listAuthors = this.props.authors.authors.map((authorObject:AuthorObjectType) => {
        return {
          id:        authorObject.id,
          title:     authorObject.name + ' ' + authorObject.surname,
          linkTitle: 'Добавить в «Активные фильтры»',
        };
      });
    }
    if(!isEmpty(this.props.tags.tags)){
      listTags = this.props.tags.tags.map((tagObject:TagObjectType) => {
        return {
          id:        tagObject.id,
          title:     tagObject.title,
          linkTitle: 'Добавить в «Активные фильтры»',
        };
      });
    }

    // todo: возможно стоит сделать функцию/компонент для генерации sections. Наследование? Подумать.
    return (
      <aside className = {style.sidebar}>
        <section className = {style.sectionSidebar + ' ' + style.sectionTags}>
          <h2 className = {style.titleSidebar}>Категории</h2>
          {
            this.props.tags.isFetching
              ? <Preloader width = {24} height = {24}/>
              : < ListSidebar
                  filter = {null}
                  listItems = {listTags}
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
                listItems = {listAuthors}
                listName = 'Authors'
                title = 'Добавить в фильтры'
              />
          }
        </section>
        <div>
          <section className = {style.sectionSidebar + ' ' + style.sectionTags}>
            <h2 className = {style.titleSidebar}>Активные фильтры</h2>
            <FiltersActive filtersList = {[]} />
          </section>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
