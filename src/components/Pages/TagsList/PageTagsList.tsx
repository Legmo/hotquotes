import React, { Component, FC, useEffect } from 'react';
import lodash from 'lodash';
import style from './style.module.scss';
import { TagObjectType } from '../../../types/types';
import ListFull from '../../Elements/ListFull/ListFull';
import Pager from '../../Elements/Pager/Pager';

type PropsType = {
  pageSize: number,
  activePage: number,
  offset: number | string, // todo: clarify it — number or string?
  tagsByPagination: Array<TagObjectType>,
  changePage: (activePage:number) => void,
  getTagsByPaginationTC: (pageSize:number, offset: number | string) => void,
}

const PageTagsList:FC<PropsType>  = ({
   pageSize,
   offset ,
   activePage,
   tagsByPagination,
   changePage,
   getTagsByPaginationTC,
}) => {

  // todo: test this hooks
  useEffect(() => {
    //componentDidMount
    getTagsByPaginationTC(pageSize, offset);
  },[activePage]);

  useEffect(() => {
    //componentDidUpdate
    // if(prevProps.activePage !== props.activePage){...}
      getTagsByPaginationTC(pageSize, offset);
  }, [activePage]);

  const tagsList = tagsByPagination.map(tagObject => tagObject.title);
  let Result;

  !lodash.isEmpty(tagsList)
    ? Result = <>
      <ListFull
        // filter = {null}
        listItems = {tagsList}
        listName = 'Tags'
        // title = 'Добавить в фильтры'
      />
      <Pager
        pageSize = {pageSize}
        activePage = {activePage}
        changePage = {changePage}
      />
    </>
    : Result = <p>
      Ни одной категории не создано.<br />
      Если вы уверены что это не так — <a href = '&#109;&#97;i&#108;&#116;o&#58;mail&#64;&#108;%&#54;5%67&#37;6Do&#46;%&#55;2&#117;' title = {'Написать разработчику'}>свяжитесь с разработчиком</a>
    </p>
  ;

  return (
    <>
      <section className = {style.sectionTagsLit}>
        <h2>Категории</h2>
        {Result}
      </section>
    </>
  );
};

export default PageTagsList;
