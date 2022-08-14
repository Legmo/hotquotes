import PageTagsList from './PageTagsList';
import { connect } from 'react-redux';
import { actionsTags, getTagsByPaginationTC } from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/redux-store';
import { TagObjectType } from '../../../types/types';

type MapStatePropsType = {
  tags: Array<TagObjectType> ,
  offset: number | string,
  activePage: number,
  pageSize: number,
};
type MapDispatchPropsType = {
  changePage: (activePage:number) => void,
  getTagsByPaginationTC: (pageSize:number, offset: number | string) => void,
};
type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    tags:       state.tags.tagsByPagination.tags,
    offset:     state.tags.tagsByPagination.offset,
    activePage: state.tags.tagsByPagination.activePage,
    pageSize:   state.tags.tagsByPagination.pageSize,
  };
};

const PageTagsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
  {
    changePage:            actionsTags.changePaginationPage,
    getTagsByPaginationTC: getTagsByPaginationTC,
  }
)(PageTagsList);

export default PageTagsContainer;
