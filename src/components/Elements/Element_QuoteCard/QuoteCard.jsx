import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import ListTagsInline from '../Element_ListTagsInline';
import {
  findElementByValue,
  getRandomArrayElement
} from '../../../utils/helpers';
import RefreshBlock from '../Element_RefreshBlock';
import { getTable } from '../../../DataAccessLayer/axiosRequests';

class QuoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: getRandomArrayElement(props.quotes),
    };
  }

  componentDidMount() {
    this.setState({
      quote: getRandomArrayElement(this.props.quotes),
    });
  }

  render() {
    const quote = this.state.quote;

    let quoteSource;
    const quoteSourceId = this.state.quote.sourceId;
    quoteSourceId && (quoteSource = findElementByValue(this.props.sources, quoteSourceId));

    let author;
    const authorId = this.state.quote.authorId;
    authorId && (author = findElementByValue(this.props.authors, authorId));

    let tags;
    const tagsIdArray = this.state.quote.tags;
    tagsIdArray && (
      tags = tagsIdArray.map(tagID => {
        const tagObject = findElementByValue(this.props.tags, tagID);
        return tagObject.name;
      })
    );
    
    return (
      <>
        <figure className = {style.blockquoteContainer}>
          <blockquote data-id = {quote.id} className = {style.blockquote}>{quote.quoteText}</blockquote>
          <figcaption className = {style.blockquoteFooter}>
            <span className = {style.authorAndSource}>
              <span className = {style.author}>
                {(author && author.name && author.surname) ? (
                  <span>{author.name} {author.surname}</span>
                ) : (
                  <span></span>
                )}
              </span>{' '}
              <cite className = {style.source}>
                {quoteSource && `<span>«${quoteSource}»</span>`}
              </cite>
            </span>
            {
              tags && <ListTagsInline listItems = {tags} />
            }
          </figcaption>
        </figure>

        <RefreshBlock />
      </>

    );
  }
}

QuoteCard.propTypes = {
  authors:   PropTypes.array,
  tags:      PropTypes.array,
  quotes:    PropTypes.array,
  sources:   PropTypes.array,
  listItems: PropTypes.string,
  setQuotes: PropTypes.func,
};

export default QuoteCard;
