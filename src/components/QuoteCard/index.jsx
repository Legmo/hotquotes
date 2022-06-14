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
      <blockquote className={style.blockquote}>
        <section className={style.cardText}>{quote.text}</section>
        <footer className={style.blockquoteFooter}>
          <span className={style.quoteSource}>
            {quote.author[0].name}
            &nbsp;
            {quote.title !== '' ? <span>«{quote.title}»</span> : <span></span>}
          </span>
          <ListTagsInline listItems={quote.category} />
        </footer>
      </blockquote>
    );
  }
}

export default QuoteCard;
