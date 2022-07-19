import Page_AddQuote from './PageAddQuote';
import {connect} from 'react-redux';

let mapStateToProps = () => {
  return {};
};

let mapDispatchToProps = () => {
  return {};
};

const Page_AddQuote_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page_AddQuote);

export default Page_AddQuote_Container;
