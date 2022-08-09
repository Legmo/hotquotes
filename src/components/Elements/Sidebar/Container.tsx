import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {
  InitialAuthorsStateType,
  actionsAuthors, 
  getTableAuthorsTC,
} from '../../../redux/reducer-authors';
import {
  InitialTagsStateType,
  actionsTags, 
  getTableTagsTC,
} from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/redux-store';

type MapStatePropsType = {
  authors: InitialAuthorsStateType, //todo: test - is it correct?
  tags: InitialTagsStateType, //todo: test - is it correct?
};

type MapDispatchPropsType = {
  setAuthorsIsFetching: (isFetching:boolean) => void
  setTagsIsFetching: (isFetching:boolean) => void
  getTableAuthorsTC: () => void,
  getTableTagsTC: () => void,
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
  setAuthorsIsFetching: actionsAuthors.setAuthorsIsFetching,
  setTagsIsFetching:    actionsTags.setTagsIsFetching,
  getTableAuthorsTC:    getTableAuthorsTC,
  getTableTagsTC:       getTableTagsTC,
})(Sidebar);

export default SidebarContainer;
