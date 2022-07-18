import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import { setAuthorsAC } from '../../../redux/reducer-authors';
import { setTagsAC } from '../../../redux/reducer-tags';

let mapStateToProps = (state) => {
  return {
    authors: state.authors,
    tags:    state.tags,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setAuthors: (authorsArray) => {
      dispatch(setAuthorsAC(authorsArray));
    },
    setTags: (tagsArray) => {
      dispatch(setTagsAC(tagsArray));
    },
  };
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
