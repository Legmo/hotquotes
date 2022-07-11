import Sidebar from './Sidebar';
import {
  addQuoteCreator,
  updateNewQuoteTextCreator,
  addAuthorCreator
} from '../../../redux/reducer-quotes';
import {
  addNewTagTextCreator
} from '../../../redux/reducer-tags';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    authors: state.authors,
    tags:    state.tags,
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
    addAuthor: (text) => {
      dispatch(addAuthorCreator(text));
    },
    updateNewAuthorName: (text) => {
      dispatch(addAuthorCreator(text));
    },
    updateNewTagText: (text) => {
      dispatch(addNewTagTextCreator(text));
    },
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
