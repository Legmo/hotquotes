import { connect } from 'react-redux';
import PageIndex from './PageIndex';
import { setQuotes } from '../../../redux/reducer-quotes';
import { setAuthors } from '../../../redux/reducer-authors';
import { setSources } from '../../../redux/reducer-sources';
import { setTags } from '../../../redux/reducer-tags';

const mapStateToProps = (state) => {
  return {
    quotes:  state.quotes.quotes,
    tags:    state.tags.tags,
    authors: state.authors.authors,
    sources: state.sources.sources,
  };
};

const PageIndexContainer = connect(
  mapStateToProps,
  {
    setQuotes,
    setAuthors,
    setTags,
    setSources,
  }
)(PageIndex);

export default PageIndexContainer;
