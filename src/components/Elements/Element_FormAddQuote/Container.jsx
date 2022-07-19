import FormAddQuote from './index';
import {connect} from 'react-redux';
import { addQuoteAC, updateNewQuoteTextAC, updateNewSourceTitleAC } from '../../../redux/reducer-quotes';
import { updateNewAuthorNameAC, updateNewAuthorSurnameAC } from '../../../redux/reducer-authors';
import { addNewTagTextAC } from '../../../redux/reducer-tags';

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

const FormAddQuoteContainer = connect(mapStateToProps, mapDispatchToProps)(FormAddQuote);

export default FormAddQuoteContainer;
