import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {
  setAuthors,
  setAuthorsIsFetching
} from '../../../redux/reducer-authors';
import {
  setTags,
  setTagsIsFetching
} from '../../../redux/reducer-tags';

let mapStateToProps = (state) => {
  return {
    authors: state.authors,
    tags:    state.tags,
  };
};

const SidebarContainer = connect(mapStateToProps, {
  setAuthors,
  setTags,
  setAuthorsIsFetching,
  setTagsIsFetching,
})(Sidebar);

export default SidebarContainer;
