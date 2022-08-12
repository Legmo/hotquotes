import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {
  InitialAuthorsStateType,
  actionsAuthors, 
  getAuthorsTC,
} from '../../../redux/reducer-authors';
import {
  InitialTagsStateType,
  actionsTags, 
  getTagsTC,
} from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/redux-store';
import { getSourcesTC, InitialSourcesStateType } from '../../../redux/reducer-sources';

type MapStatePropsType = {
  authors: InitialAuthorsStateType, //todo: test - is it correct?
  tags: InitialTagsStateType, //todo: test - is it correct?
  sources: InitialSourcesStateType, //todo: test - is it correct?
};

type MapDispatchPropsType = {
  setAuthorsIsFetching: (isFetching:boolean) => void
  setTagsIsFetching: (isFetching:boolean) => void
  setSourcesIsFetching: (isFetching:boolean) => void
  getAuthorsTC: () => void,
  getSourcesTC: () => void,
  getTagsTC: () => void,
};

type OwnPropsType = Record<string, never>;

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    authors: state.authors,
    tags:    state.tags,
    sources: state.sources,
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const SidebarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
  setAuthorsIsFetching: actionsAuthors.setAuthorsIsFetching,
  setTagsIsFetching:    actionsTags.setTagsIsFetching,
  setSourcesIsFetching: actionsTags.setTagsIsFetching,
  getAuthorsTC:         getAuthorsTC,
  getSourcesTC:         getSourcesTC,
  getTagsTC:            getTagsTC,
})(Sidebar);

export default SidebarContainer;
