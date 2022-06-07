import React, { Component } from 'react';
import CategoriesList from '../CategoriesList/index';

//We need to move this function to helpers.js (or not?)
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
      <div className="card mx-auto">
        <blockquote className="card-body blockquote pb-1">
          <section className="card-text">{quote.text}</section>
          <footer className="blockquote-footer text-right mt-2">
            <span className="quote-source">
              {quote.author[0].name}
              &nbsp;
              {quote.title !== '' ? (
                <span>«{quote.title}»</span>
              ) : (
                <span></span>
              )}
            </span>
            <div>
              <CategoriesList categories={quote.category} inline="yes" />
            </div>
          </footer>
        </blockquote>
      </div>
    );
  }
}

export default QuoteCard;
