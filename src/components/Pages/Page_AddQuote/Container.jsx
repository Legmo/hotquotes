import Page_AddQuote from './PageAddQuote';
import {
  addQuoteCreator,
  updateNewQuoteTextCreator,
  updateNewAuthorTextCreator,
  updateNewTitleTextCreator,
  updateNewTagTextCreator,
} from '../../../redux/reducer-quotes';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newQuoteText: state.quotes.newQuoteText,
    newAuthorText: state.quotes.newAuthorText,
    newTitleText: state.quotes.newTitleText,
    newTagText: state.quotes.newTagText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addQuote: () => {
      dispatch(addQuoteCreator());
    },
    updateNewQuoteText: (text) => {
      dispatch(updateNewQuoteTextCreator(text));
    },
    updateNewAuthorText: (text) => {
      dispatch(updateNewAuthorTextCreator(text));
    },
    updateNewTitleText: (text) => {
      dispatch(updateNewTitleTextCreator(text));
    },
    updateNewTagText: (text) => {
      dispatch(updateNewTagTextCreator(text));
    },
  };
};

const Page_AddQuote_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page_AddQuote);

export default Page_AddQuote_Container;
