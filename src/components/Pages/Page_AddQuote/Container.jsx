import Page_AddQuote from './PageAddQuote';
import {
  addQuoteAC,
  updateNewQuoteTextAC,
  updateNewSourceTitleAC,
} from '../../../redux/reducer-quotes';
import {
  addNewTagTextAC
} from '../../../redux/reducer-tags';
import {
  updateNewAuthorNameAC,
  updateNewAuthorSurnameAC
} from '../../../redux/reducer-authors';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newQuoteText:  state.quotes.newQuoteText,
    NewAuthorName: state.quotes.NewAuthorName,
    newTitleText:  state.quotes.newTitleText,
    newTagText:    state.quotes.newTagText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addQuote: () => {
      dispatch(addQuoteAC());
    },
    updateNewQuoteText: (text) => {
      dispatch(updateNewQuoteTextAC(text));
    },
    updateNewAuthorName: (text) => {
      dispatch(updateNewAuthorNameAC(text));
    },
    updateNewAuthorSurname: (text) => {
      dispatch(updateNewAuthorSurnameAC(text));
    },
    updateNewTitleText: (text) => {
      dispatch(updateNewSourceTitleAC(text));
    },
    updateNewTagText: (text) => {
      dispatch(addNewTagTextAC(text));
    },
  };
};

const Page_AddQuote_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page_AddQuote);

export default Page_AddQuote_Container;
