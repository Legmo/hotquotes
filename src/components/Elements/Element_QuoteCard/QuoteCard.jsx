import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import ListTagsInline from '../Element_ListTagsInline';
import {
  findElementByValue,
  getRandomArrayElement,
} from '../../../utils/helpers';
import RefreshBlock from '../Element_RefreshBlock';
import { getTable } from '../../../DataAccessLayer/axiosRequests';
import lodash from 'lodash';

class QuoteCard extends Component {
  componentDidMount() {
    /*    this.setState({
     quote: getRandomArrayElement(this.props.quotes),
     });*/

    //todo: this logic for test only
    //todo: we need to get all data here. Now we get Authors & Tags in <Sidebar /> - it is wrong
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
    if (!lodash.isEmpty(this.props.quotes)) {
      //todo: change this logic
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
          <figure className = {style.blockquoteContainer}>
            <blockquote data-id = {quote.id} className = {style.blockquote}>
              {quote.quoteText}
            </blockquote>
            <figcaption className = {style.blockquoteFooter}>
              <span className = {style.authorAndSource}>
                <span className = {style.author}>
                  {author && author.name && author.surname ? (
                    <span>
                      {author.name} {author.surname}
                    </span>
                  ) : (
                    <span></span>
                  )}
                </span>{' '}
                <cite className = {style.source}>
                  {quoteSource && <span>«{quoteSource}»</span>}
                </cite>
              </span>
              {tags && <ListTagsInline listItems = {tags} />}
            </figcaption>
          </figure>

          <RefreshBlock />
        </>
      );
    }
  }
}

QuoteCard.propTypes = {
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

export default QuoteCard;
