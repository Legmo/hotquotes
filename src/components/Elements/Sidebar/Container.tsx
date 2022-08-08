import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {
  InitialAuthorsStateType,
  actionsAuthors
} from '../../../redux/reducer-authors';
import {
  InitialTagsStateType,
  actionsTags
} from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/redux-store';
import { AuthorObjectType, TagObjectType } from '../../../types/types';

type MapStatePropsType = {
  authors: InitialAuthorsStateType, //todo: test - is it correct?
  tags: InitialTagsStateType, //todo: test - is it correct?
};

type MapDispatchPropsType = {
  setAuthorsIsFetching: (isFetching:boolean) => void
  setAuthors: (authorsArray:Array<AuthorObjectType>) => void
  setTagsIsFetching: (isFetching:boolean) => void
  setTags: (tagsArray:Array<TagObjectType>) => void
};

type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    authors: state.authors,
    tags:    state.tags,
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const SidebarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  setAuthors:           actionsAuthors.setAuthors,
  setAuthorsIsFetching: actionsAuthors.setAuthorsIsFetching,
  setTags:              actionsTags.setTags,
  setTagsIsFetching:    actionsTags.setTagsIsFetching,
})(Sidebar);

export default SidebarContainer;
