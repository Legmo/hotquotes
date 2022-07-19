import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  findElementByValue,
  getRandomArrayElement,
} from '../../../utils/helpers';
import RefreshBlock from '../../Elements/Element_RefreshBlock';
import {
  getTable,
  // getTableByPagination
} from '../../../DataAccessLayer/axiosRequests';
import lodash from 'lodash';
import Element_QuoteCard from '../../Elements/Element_QuoteCard';
// import style from './style.module.scss';

class PageIndex extends Component {
  componentDidMount() {
    /*    this.setState({
     quote: getRandomArrayElement(this.props.quotes),
     });*/

    // getTableByPagination('tags',4, 0);

    //todo: this logic for test only
    //todo: разобраться с получением данных Authors и Tags здесь и в Sidebar. В Sidebar их надо оставить, чтоб отображалаись для других страниц
    getTable('quotes').then((response) => {
      /*        this.state = {
         quote: response,
         };*/
      this.props.setQuotes(response);
    });
    getTable('sources').then((response) => {
      this.props.setSources(response);
    });
    getTable('authors').then((response) => {
      this.props.setAuthors(response);
    });
    getTable('tags').then((response) => {
      this.props.setTags(response);
    });
  }

  render() {
    //todo: change this logic
    if (!lodash.isEmpty(this.props.quotes)) {
      // const quote = this.state.quote;
      const quote = getRandomArrayElement(this.props.quotes);

      let quoteSource;
      const quoteSourceId = quote.sourceId;
      const quoteSourcesBase = this.props.sources;
      if (
        !lodash.isEmpty(quoteSourceId) &&
        !lodash.isEmpty(quoteSourceId[0]) &&
        !lodash.isEmpty(quoteSourcesBase)
      ) {
        quoteSource = findElementByValue(
          quoteSourcesBase,
          quoteSourceId[0]
        ).title;
      }

      let author;
      const authorsId = quote.authorsId[0]; //todo: change logic. There may be situations when there are several authors.
      const authorsBase = this.props.authors;
      if (authorsId && !lodash.isEmpty(authorsBase)) {
        author = findElementByValue(authorsBase, authorsId);
      }

      let tags;
      const tagsIdArray = quote.tagsId;
      const tagsBase = this.props.tags;
      if (!lodash.isEmpty(tagsIdArray) && !lodash.isEmpty(tagsBase)) {
        tags = tagsIdArray.map((tagID) => {
          const tagObject = findElementByValue(tagsBase, tagID);
          return tagObject.title;
        });
      }

      return (
        <>
          <Element_QuoteCard quote = {quote} author = {author} tags = {tags} source = {quoteSource}/>
          <RefreshBlock />
        </>
      );
    }
  }
}

PageIndex.propTypes = {
  authors:    PropTypes.array,
  tags:       PropTypes.array,
  quotes:     PropTypes.array,
  sources:    PropTypes.array,
  listItems:  PropTypes.string,
  setQuotes:  PropTypes.func,
  setAuthors: PropTypes.func,
  setTags:    PropTypes.func,
  setSources: PropTypes.func,
};

export default PageIndex;
