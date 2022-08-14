import React, { Component } from 'react';
import style from './style.module.scss';
import { isEmpty } from 'lodash';
import ListSidebar from '../ListSidebar/ListSidebar';
import FiltersActive from '../FiltersActive/FiltersActive';
import Preloader from '../Preloader/Preloader';
import { AuthorObjectType, SidebarListObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { InitialTagsStateType } from '../../../redux/reducer-tags';
import { InitialAuthorsStateType } from '../../../redux/reducer-authors';
import { InitialSourcesStateType } from '../../../redux/reducer-sources';

type PropsType = {
  authorsIsUpdating: (isUpdating:boolean) => void,
  tagsIsUpdating: (isUpdating:boolean) => void,
  sourcesIsUpdating: (isUpdating:boolean) => void,
  authors: InitialAuthorsStateType,
  tags: InitialTagsStateType,
  sources: InitialSourcesStateType,
  getAuthorsTC: () => void,
  getSourcesTC: () => void,
  getTagsTC: () => void,
};

class Sidebar extends Component<PropsType> {
  componentDidMount() {
    this.props.authorsIsUpdating(true);
    this.props.getAuthorsTC();

    this.props.tagsIsUpdating(true);
    this.props.getTagsTC();

    this.props.sourcesIsUpdating(true);
    this.props.getSourcesTC();
  }

  render() {
    let listAuthors = [] as Array<SidebarListObjectType>;
    let listTags = [] as Array<SidebarListObjectType>;
    let listSources = [] as Array<SidebarListObjectType>;
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
    if(!isEmpty(this.props.sources.sources)){
      listSources = this.props.sources.sources.map((sourceObject:SourceObjectType) => {
        return {
          id:        sourceObject.id,
          title:     sourceObject.title,
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
            this.props.tags.isUpdating
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
            this.props.authors.isUpdating
              ? <Preloader width = {24} height = {24}/>
              : < ListSidebar
                filter = 'none'
                listItems = {listAuthors}
                listName = 'Authors'
                title = 'Добавить в фильтры'
              />
          }
        </section>
        <section className = {style.sectionSidebar + ' ' + style.sectionAuthors}>
          <h2 className = {style.titleSidebar}>Источники</h2>
          {
            this.props.authors.isUpdating
              ? <Preloader width = {24} height = {24}/>
              : < ListSidebar
                filter = 'none'
                listItems = {listSources}
                listName = 'Sources'
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
