import React, { Component } from 'react';
import style from './style.module.scss';
import ListTagsInline from '../ListTagsInline';

//todo: We need to move this function to helpers.js (or not?)
Array.prototype.rand = function () {
  return this[Math.floor(Math.random() * this.length)];
};

class QuoteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: props.store.getState().quotes.quotes_base.rand(),
    };
  }

  componentDidMount() {
    // this.forceUpdate()
    this.setState({
      quote: this.props.store.getState().quotes.quotes_base.rand(),
    });
  }

  render() {
    const quote = this.state.quote;
    return (
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
    );
  }
}

export default QuoteCard;
