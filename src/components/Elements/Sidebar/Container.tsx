import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { actionsAuthors, getAuthorsTC, InitialAuthorsStateType } from '../../../redux/reducer-authors';
import { actionsTags, getTagsTC, InitialTagsStateType } from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/redux-store';
import { actionsSources, getSourcesTC, InitialSourcesStateType } from '../../../redux/reducer-sources';

type MapStatePropsType = {
  authors: InitialAuthorsStateType, //todo: test - is it correct?
  tags: InitialTagsStateType, //todo: test - is it correct?
  sources: InitialSourcesStateType, //todo: test - is it correct?
};

type MapDispatchPropsType = Record<string, never>;

//sources={undefined} tags={undefined} authors={undefined}
type OwnPropsType = any; // todo: fix any. See at App.tsx

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
  return {
    authors: state.authors,
    tags:    state.tags,
    sources: state.sources,
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const SidebarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {})(Sidebar);

export default SidebarContainer;
