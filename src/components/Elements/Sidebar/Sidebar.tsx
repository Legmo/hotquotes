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
import { Box } from '@mui/material';

type PropsType = {
  authors: InitialAuthorsStateType,
  tags: InitialTagsStateType,
  sources: InitialSourcesStateType,
  isAuthorsUpdated: boolean,
  isSourcesUpdated: boolean,
  isTagsUpdated: boolean,
};

const Sidebar:FC<PropsType>  = ({
  authors,
  tags,
  sources,
  isAuthorsUpdated,
  isSourcesUpdated,
  isTagsUpdated,
}) => {

  // todo: возможно надо вынести функции подготовки данных для ListSidebar
  // todo: точно надо сделать одну функцию-генератор: (массив, [ключи для внесения в title], 'linkTitle') => ({})
  let listAuthors = [] as Array<SidebarListObjectType>;
  let listTags = [] as Array<SidebarListObjectType>;
  let listSources = [] as Array<SidebarListObjectType>;
  if(!isEmpty(authors.authors)){
    listAuthors = authors.authors.map((authorObject:AuthorObjectType) => {
      return {
        id:        authorObject.id,
        title:     authorObject.name + ' ' + authorObject.surname,
        linkTitle: 'Добавить в «Активные фильтры»',
      };
    });
  }
  if(!isEmpty(tags.tags)){
    listTags = tags.tags.map((tagObject:TagObjectType) => {
      return {
        id:        tagObject.id,
        title:     tagObject.title,
        linkTitle: 'Добавить в «Активные фильтры»',
      };
    });
  }
  if(!isEmpty(sources.sources)){
    listSources = sources.sources.map((sourceObject:SourceObjectType) => {
      return {
        id:        sourceObject.id,
        title:     sourceObject.title,
        linkTitle: 'Добавить в «Активные фильтры»',
      };
    });
  }

  // todo: возможно стоит сделать функцию/компонент для генерации sections. Наследование? Подумать.
  return (

    <Box
      component = 'aside'
      sx = {{
        display:   'grid',
        rowGap:    4,
        alignSelf: 'baseline',
        textAlign: {
          xs: 'left',
          sm: 'right',
        },
        paddingTop: {
          xs: 2,
          sm: 0,
        },
        paddingRight: {
          xs: 8,
          sm: 0,
        },
      }}
      >
      <section className = {style.sectionSidebar + ' ' + style.sectionTags}>
        <h2 className = {style.titleSidebar}>Категории</h2>
        {
          isTagsUpdated
            ? <Preloader width = {24} height = {24}/>
            : < ListSidebar
                listItems = {listTags}
                listName = 'Tags'
                // title = 'Добавить в фильтры'
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
          isAuthorsUpdated
            ? <Preloader width = {24} height = {24}/>
            : < ListSidebar
              listItems = {listAuthors}
              listName = 'Authors'
              // title = 'Добавить в фильтры'
            />
        }
      </section>
      <section className = {style.sectionSidebar + ' ' + style.sectionAuthors}>
        <h2 className = {style.titleSidebar}>Источники</h2>
        {
          isSourcesUpdated
            ? <Preloader width = {24} height = {24}/>
            : < ListSidebar
              listItems = {listSources}
              listName = 'Sources'
              // title = 'Добавить в фильтры'
            />
        }
      </section>
      <div>
        <section className = {style.sectionSidebar + ' ' + style.sectionTags}>
          <h2 className = {style.titleSidebar}>Активные фильтры</h2>
          <FiltersActive filtersList = {[]} />
        </section>
      </div>
    </Box>
  );
};

export default Sidebar;
