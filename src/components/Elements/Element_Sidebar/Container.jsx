import Sidebar from './Sidebar';
import {
  addQuoteAC,
  updateNewQuoteTextAC,
  addAuthorAC
} from '../../../redux/reducer-quotes';
import {
  addNewTagTextAC
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
      dispatch(addQuoteAC());
    },
    updateNewQuoteText: (text) => {
      dispatch(updateNewQuoteTextAC(text));
    },
    addAuthor: (text) => {
      dispatch(addAuthorAC(text));
    },
    updateNewAuthorName: (text) => {
      dispatch(addAuthorAC(text));
    },
    updateNewTagText: (text) => {
      dispatch(addNewTagTextAC(text));
    },
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
