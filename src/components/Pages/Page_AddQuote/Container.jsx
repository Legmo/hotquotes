import Page_AddQuote from './PageAddQuote';
import {
  addQuoteCreator,
  updateNewQuoteTextCreator,
  updateNewTitleTextCreator,
} from '../../../redux/reducer-quotes';
import {
  addNewTagTextCreator
} from '../../../redux/reducer-tags';
import {
  updateNewAuthorNameCreator,
  updateNewAuthorSurnameCreator
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
      dispatch(addQuoteCreator());
    },
    updateNewQuoteText: (text) => {
      dispatch(updateNewQuoteTextCreator(text));
    },
    updateNewAuthorName: (text) => {
      dispatch(updateNewAuthorNameCreator(text));
    },
    updateNewAuthorSurname: (text) => {
      dispatch(updateNewAuthorSurnameCreator(text));
    },
    updateNewTitleText: (text) => {
      dispatch(updateNewTitleTextCreator(text));
    },
    updateNewTagText: (text) => {
      dispatch(addNewTagTextCreator(text));
    },
  };
};

const Page_AddQuote_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page_AddQuote);

export default Page_AddQuote_Container;
