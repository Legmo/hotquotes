import PageAddQuote from './PageAddQuote';
import {connect} from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';

type MapStatePropsType = Record<string, never>;
type MapDispatchPropsType = Record<string, never>;
type OwnPropsType = Record<string, never>;

const mapStateToProps = () => {
  return {};
};

const PageAddQuoteContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
  {}
)(PageAddQuote);

export default PageAddQuoteContainer;
