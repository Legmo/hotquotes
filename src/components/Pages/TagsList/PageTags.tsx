import React, { Component } from 'react';
import style from './style.module.scss';
import ListFull from '../../Elements/ListFull/ListFull';
import { getTableByPagination } from '../../../DataAccessLayer/api';
import lodash from 'lodash';
import Pager from '../../Elements/Pager/Pager';
import { TagObjectType } from '../../../types/types';

type PropsType = {
  pageSize: number,
  activePage: number,
  tags: Array<TagObjectType>,
  offset: number | string,
  getTableByPagination: (tableName:string, pageSize:number, offset: number | string) => Promise<{data:Array<TagObjectType>, offset: string | number}>, // todo: check, is it correct?
  setTagsByPagination: (tagsArray:Array<TagObjectType>, offset: number | string) => void,
  changePage: (activePage:number) => void,
}

class PageTags extends Component<PropsType> {
  componentDidMount() {
    getTableByPagination('tags', this.props.pageSize, this.props.offset)
      .then((response: void | {data:Array<TagObjectType>, offset: string | number}) => {
        if(response) {
          const tagsArray:Array<TagObjectType>  = response.data;
          const offset: number | string = response.offset;
          this.props.setTagsByPagination(tagsArray, offset);
        }
      }
    );
  }

  componentDidUpdate(prevProps:PropsType) {
    //todo; refactoring this
    if(prevProps.activePage !== this.props.activePage){
      getTableByPagination('tags', this.props.pageSize, this.props.offset)
        // todo: исправить дублирование кода
        .then((response: void | {data:Array<TagObjectType>, offset: string | number}) => {
          if(response) {
            const tagsArray:Array<TagObjectType>  = response.data;
            const offset: number | string = response.offset;
            this.props.setTagsByPagination(tagsArray, offset);
          }
        }
      );
    }
  }

  render() {
    const tagsList = this.props.tags.map((tagObject) => tagObject.title);
    let Result;

    !lodash.isEmpty(tagsList)
      ? Result = <>
        <ListFull
          filter = {null}
          listItems = {tagsList}
          listName = 'Tags'
          title = 'Добавить в фильтры'
        />
        <Pager
          pageSize = {this.props.pageSize}
          activePage = {this.props.activePage}
          changePage = {this.props.changePage}
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
  }
}

export default PageTags;
