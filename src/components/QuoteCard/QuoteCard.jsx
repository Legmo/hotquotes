import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import ListTagsInline from '../ListTagsInline';
import { getRandomArrayElement } from '../../helpers';
import RefreshBlock from '../RefreshBlock';

class QuoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: getRandomArrayElement(props.quotes.quotes_base),
    };
  }

  componentDidMount() {
    // this.forceUpdate()
    this.setState({
      quote: getRandomArrayElement(this.props.quotes.quotes_base),
    });
  }

  render() {
    const quote = this.state.quote;
    return (
      <>
        <figure className={style.blockquoteContainer}>
          <blockquote className={style.blockquote}>{quote.text}</blockquote>
          <figcaption className={style.blockquoteFooter}>
            <span className={style.authorAndSource}>
              <span className={style.author}>{quote.author[0].name}</span>{' '}
              <cite className={style.source}>
                {quote.title !== '' ? (
                  <span>, «{quote.title}»</span>
                ) : (
                  <span></span>
                )}
              </cite>
            </span>
            <ListTagsInline listItems={quote.category} />
          </figcaption>
        </figure>

        <RefreshBlock />
      </>

    );
  }
}

QuoteCard.propTypes = {
  quotes:      PropTypes.object,
  quotes_base: PropTypes.array,
  listItems:   PropTypes.string,
};

export default QuoteCard;
