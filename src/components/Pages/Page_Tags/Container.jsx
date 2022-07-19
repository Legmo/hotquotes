import Page_Tags from './PageTags';
import {
  setTagsByPaginationAC,
  changePageAC
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

let mapDispatchToProps = (dispatch) => {
  return {
    setTagsByPagination: (tagsArray, offset) => {
      dispatch(setTagsByPaginationAC(tagsArray, offset));
    },
    changePage: (activePage) => {
      dispatch(changePageAC(activePage));
    },
  };
};

const Page_Tags_Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page_Tags);

export default Page_Tags_Container;
