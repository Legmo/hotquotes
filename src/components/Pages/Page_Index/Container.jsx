import { connect } from 'react-redux';
import PageIndex from './PageIndex';
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

const Page_Index_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageIndex);

export default Page_Index_Container;
