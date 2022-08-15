import Sidebar from './Sidebar';
import { connect } from 'react-redux';
import { InitialAuthorsStateType } from '../../../redux/reducer-authors';
import { InitialTagsStateType } from '../../../redux/reducer-tags';
import { AppStateType } from '../../../redux/store';
import { InitialSourcesStateType } from '../../../redux/reducer-sources';
import { getAuthors, getSources, getTags } from '../../../redux/selectors';

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
    authors: getAuthors(state),
    tags:    getTags(state),
    sources: getSources(state),
  };
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
const SidebarContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {})(Sidebar);

export default SidebarContainer;
