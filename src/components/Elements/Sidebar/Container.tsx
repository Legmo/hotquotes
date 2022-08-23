import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { InitialAuthorsStateType } from '../../../redux/reducer-authors';
import { InitialTagsStateType } from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/store';
import { InitialSourcesStateType } from '../../../redux/reducer-sources';
import {
  getAuthors,
  getAuthorsIsUpdating,
  getSources,
  getSourcesIsUpdating,
  getTags,
  getTagsIsUpdating
} from '../../../redux/selectors';

type MapStatePropsType = {//todo: test - is it correct?
  authors: InitialAuthorsStateType, 
  tags: InitialTagsStateType, 
  sources: InitialSourcesStateType,
  isAuthorsUpdated: boolean,
  isSourcesUpdated: boolean,
  isTagsUpdated: boolean,
};

type MapDispatchPropsType = Record<string, never>;

//sources={undefined} tags={undefined} authors={undefined}
type OwnPropsType = any; // todo: fix any. See at App.tsx

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    // authors:           getAuthorsAuthors(state),
    authors:           getAuthors(state),
    tags:              getTags(state),
    sources:           getSources(state),
    isAuthorsUpdated: getAuthorsIsUpdating(state),
    isSourcesUpdated: getSourcesIsUpdating(state),
    isTagsUpdated:    getTagsIsUpdating(state),
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const SidebarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {})(Sidebar);

export default SidebarContainer;
