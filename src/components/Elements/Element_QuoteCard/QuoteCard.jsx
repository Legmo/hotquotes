import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import ListTagsInline from '../Element_ListTagsInline';
import {
  findElementByValue,
  getRandomArrayElement
} from '../../../utils/helpers';
import RefreshBlock from '../Element_RefreshBlock';

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
    let author;
    const authorsBase = this.props.authors;
    const authorId = this.state.quote.authorId;
    let tags;
    const tagsBase = this.props.tags;
    const tagsIdArray = this.state.quote.tags;

    author = findElementByValue(authorsBase, authorId);

    tags = tagsIdArray.map(tagID => {
      const tagObject = findElementByValue(tagsBase, tagID);
      return tagObject.name;
    });

    return (
      <>
        <figure className = {style.blockquoteContainer}>
          <blockquote className = {style.blockquote}>{quote.quoteText}</blockquote>
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
                {quote.sourceTitle !== '' ? (
                  <span>, «{quote.sourceTitle}»</span>
                ) : (
                  <span></span>
                )}
              </cite>
            </span>
            <ListTagsInline listItems = {tags} />
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
  listItems: PropTypes.string,
};

export default QuoteCard;
