import PageTags from './PageTags';
import {actionsTags} from '../../../redux/reducer-tags';
import {connect} from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { TagObjectType } from '../../../types/types';

type MapStatePropsType = {
  tags: Array<TagObjectType> ,
  offset: number | string,
  activePage: number,
  pageSize: number,
};
type MapDispatchPropsType = {
  setTagsByPagination: (tagsArray:Array<TagObjectType>, offset: number | string) => void,
  changePage: (activePage:number) => void,
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
    setTagsByPagination: actionsTags.setTagsByPagination,
    changePage:          actionsTags.changePage
  }
)(PageTags);

export default PageTagsContainer;
