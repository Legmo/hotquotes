import { connect } from 'react-redux';
import QuoteCard from './QuoteCard';
import { setQuotesAC } from '../../../redux/reducer-quotes';
import { setAuthorsAC } from '../../../redux/reducer-authors';
import { setSourcesAC } from '../../../redux/reducer-sources';
import { setTagsAC } from '../../../redux/reducer-tags';

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
    setAuthors: (authorsArray) => {
      dispatch(setAuthorsAC(authorsArray));
    },
    setTags: (tagsArray) => {
      dispatch(setTagsAC(tagsArray));
    },
    setSources: (sourcesArray) => {
      dispatch(setSourcesAC(sourcesArray));
    },
  };
};

const QuoteCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteCard);

export default QuoteCardContainer;
