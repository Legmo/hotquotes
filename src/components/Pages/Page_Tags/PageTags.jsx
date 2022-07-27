import React, { Component } from 'react';
import style from './style.module.scss';
import PropTypes from 'prop-types';
import ListFull from '../../Elements/Element_ListFull';
import { getTableByPagination } from '../../../DataAccessLayer/api';
import lodash from 'lodash';
import Pager from '../../Elements/Element_Pager';

class PageTags extends Component {
  componentDidMount() {
    getTableByPagination('tags', this.props.pageSize, this.props.offset)
      .then(response => {
        this.props.setTagsByPagination(response.data, response.offset);
      }
    );
  }

  componentDidUpdate(prevProps) {
    //todo; refactoring this
    if(prevProps.activePage !== this.props.activePage){
      getTableByPagination('tags', this.props.pageSize, this.props.offset)
        .then(response => {
          this.props.setTagsByPagination(response.data, response.offset);
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
          filter = 'none'
          listItems = {tagsList}
          listName = 'Tags'
          title = 'Добавить в фильтры'
        />
        {/*{PagerTest}*/}
        <Pager
          pageSize = {this.props.pageSize}
          activePage = {this.props.activePage}
          changePage = {this.props.changePage}/>
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

PageTags.propTypes = {
  tags:                PropTypes.array,
  setTagsByPagination: PropTypes.func,
  changePage:          PropTypes.func,
  activePage:          PropTypes.number,
  pageSize:            PropTypes.number,
  offset:              PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
};

export default PageTags;
