import FormAddQuote from './index';
import {connect} from 'react-redux';
import { addQuote, updateNewQuoteText, updateNewSourceTitle } from '../../../redux/reducer-quotes';
import { updateNewAuthorName, updateNewAuthorSurname } from '../../../redux/reducer-authors';
import { addNewTagText } from '../../../redux/reducer-tags';

let mapStateToProps = (state) => {
  return {
    newQuoteText:  state.quotes.newQuoteText,
    NewAuthorName: state.quotes.NewAuthorName,
    newTitleText:  state.quotes.newTitleText,
    newTagText:    state.quotes.newTagText,
  };
};

const FormAddQuoteContainer = connect(mapStateToProps, {
  addQuote,
  updateNewQuoteText,
  updateNewAuthorName,
  updateNewAuthorSurname,
  updateNewSourceTitle,
  addNewTagText,
})(FormAddQuote);

export default FormAddQuoteContainer;
