import React, { FC } from 'react';
import style from './style.module.scss';
import { isEmpty } from 'lodash';
import ListSidebar from '../ListSidebar/ListSidebar';
import FiltersActive from '../FiltersActive/FiltersActive';
import Preloader from '../Preloader/Preloader';
import { AuthorObjectType, SidebarListObjectType, SourceObjectType, TagObjectType } from '../../../types/types';
import { InitialTagsStateType } from '../../../redux/reducer-tags';
import { InitialAuthorsStateType } from '../../../redux/reducer-authors';
import { InitialSourcesStateType } from '../../../redux/reducer-sources';
import { NavLink } from 'react-router-dom';

type PropsType = {
  authors: InitialAuthorsStateType,
  tags: InitialTagsStateType,
  sources: InitialSourcesStateType,
};

const Sidebar:FC<PropsType>  = (props) => {

  // todo: возможно надо вынести функции подготовки данных для ListSidebar
  // todo: точно надо сделать одну функцию-генератор: (массив, [ключи для внесения в title], 'linkTitle') => ({})
  let listAuthors = [] as Array<SidebarListObjectType>;
  let listTags = [] as Array<SidebarListObjectType>;
  let listSources = [] as Array<SidebarListObjectType>;
  if(!isEmpty(props.authors.authors)){
    listAuthors = props.authors.authors.map((authorObject:AuthorObjectType) => {
      return {
        id:        authorObject.id,
        title:     authorObject.name + ' ' + authorObject.surname,
        linkTitle: 'Добавить в «Активные фильтры»',
      };
    });
  }
  if(!isEmpty(props.tags.tags)){
    listTags = props.tags.tags.map((tagObject:TagObjectType) => {
      return {
        id:        tagObject.id,
        title:     tagObject.title,
        linkTitle: 'Добавить в «Активные фильтры»',
      };
    });
  }
  if(!isEmpty(props.sources.sources)){
    listSources = props.sources.sources.map((sourceObject:SourceObjectType) => {
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
          props.tags.isUpdating
            ? <Preloader width = {24} height = {24}/>
            : < ListSidebar
                filter = {null}
                listItems = {listTags}
                listName = 'Tags'
                title = 'Добавить в фильтры'
              />
        }
        <NavLink
          to = '/tags'
          title = 'Список всех категорий'
          className = {
            ({ isActive }) => isActive
              ? (style.sidebarNavigation + ' ' + style.active)
              : style.sidebarNavigation
          }
        >
          Все категории
        </NavLink>
      </section>
      <section className = {style.sectionSidebar + ' ' + style.sectionAuthors}>
        <h2 className = {style.titleSidebar}>Авторы</h2>
        {
          props.authors.isUpdating
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
          props.authors.isUpdating
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
};

export default Sidebar;
