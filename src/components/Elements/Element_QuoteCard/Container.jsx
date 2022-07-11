import { connect } from 'react-redux';
import QuoteCard from './QuoteCard';

const mapStateToProps = (state) => {
  return {
    quotes:  state.quotes.quotesBase,
    tags:    state.tags.tagsBase,
    authors: state.authors.authorsBase,
  };
};

const mapDispatchToProps = () => {
  return {};
};

const QuoteCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteCard);

export default QuoteCardContainer;
