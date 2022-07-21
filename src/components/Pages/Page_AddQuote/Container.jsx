import PageAddQuote from './PageAddQuote';
import {connect} from 'react-redux';

let mapStateToProps = () => {
  return {};
};

const PageAddQuoteContainer = connect(
  mapStateToProps,
  {}
)(PageAddQuote);

export default PageAddQuoteContainer;
