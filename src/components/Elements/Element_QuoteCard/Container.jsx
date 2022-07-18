import { connect } from 'react-redux';
import QuoteCard from './QuoteCard';
import { setQuotesAC } from '../../../redux/reducer-quotes';

const mapStateToProps = (state) => {
  return {
    quotes:  state.quotes.quotes,
    tags:    state.tags.tags,
    authors: state.authors.authors,
    sources: state.sources.sources,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuotes: (quotesArray) => {
      dispatch(setQuotesAC(quotesArray));
    },
  };
};

const QuoteCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteCard);

export default QuoteCardContainer;
