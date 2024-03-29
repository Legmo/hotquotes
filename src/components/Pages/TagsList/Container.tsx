import PageTagsList from './PageTagsList';
import { connect } from 'react-redux';
import { actionsTags, getTagsByPaginationTC } from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/store';
import { TagObjectType } from '../../../types/types';
import {
  getTagsByPaginationActivePage,
  getTagsByPaginationOffset,
  getTagsByPaginationPageSize,
  getTagsByPaginationTags
} from '../../../redux/selectors';

type MapStatePropsType = {
  offset: number | string,
  activePage: number,
  pageSize: number,
  tagsByPagination: Array<TagObjectType>,
};
type MapDispatchPropsType = {
  changePage: (activePage:number) => void,
  getTagsByPaginationTC: (pageSize:number, offset: number | string) => void,
};
type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    offset:           getTagsByPaginationOffset(state),
    activePage:       getTagsByPaginationActivePage(state),
    pageSize:         getTagsByPaginationPageSize (state),
    tagsByPagination: getTagsByPaginationTags(state),
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
