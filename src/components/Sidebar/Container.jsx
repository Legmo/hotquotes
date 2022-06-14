import Sidebar from './Sidebar';
import {
  addQuoteCreator,
  updateNewQuoteTextCreator,
  updateNewAuthorTextCreator,
  updateNewTagTextCreator,
} from '../../redux/reducer-quotes';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
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
    updateNewTagText: (text) => {
      dispatch(updateNewTagTextCreator(text));
    },
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
