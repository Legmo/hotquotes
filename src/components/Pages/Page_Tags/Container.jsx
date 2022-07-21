import PageTags from './PageTags';
import {
  setTagsByPagination,
  changePage
} from '../../../redux/reducer-tags';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    tags:       state.tags.tagsByPagination.tags,
    offset:     state.tags.tagsByPagination.offset,
    activePage: state.tags.tagsByPagination.activePage,
    pageSize:   state.tags.tagsByPagination.pageSize,
  };
};

const PageTagsContainer = connect(
  mapStateToProps,
  {
    setTagsByPagination,
    changePage
  }
)(PageTags);

export default PageTagsContainer;
