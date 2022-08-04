import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {
  InitialAuthorsStateType,
  setAuthors,
  setAuthorsIsFetching
} from '../../../redux/reducer-authors';
import {
  InitialTagsStateType,
  setTags,
  setTagsIsFetching
} from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/redux-store';
import { AuthorObjectType, TagObjectType } from '../../../types/types';

type MapStatePropsType = {
  authors: InitialAuthorsStateType
  tags: InitialTagsStateType
};

type MapDispatchPropsType = {
  setAuthorsIsFetching: (isFetching:boolean) => void
  setAuthors: (authorsArray:Array<AuthorObjectType>) => void
  setTagsIsFetching: (isFetching:boolean) => void
  setTags: (tagsArray:Array<TagObjectType>) => void
};

type OwnPropsType = Record<string, never>; //todo: fix it

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    authors: state.authors,
    tags:    state.tags,
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const SidebarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  setAuthors,
  setTags,
  setAuthorsIsFetching,
  setTagsIsFetching,
})(Sidebar);

export default SidebarContainer;
